#!/usr/bin/env python3
"""Validate the generated Hugo HTML (standard library only).

Usage: python3 scripts/check-seo.py [dist] [--preview]
Build Hugo first. Static games, campaigns and redirect aliases use other templates.
"""
import json
import re
import sys
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
from urllib.robotparser import RobotFileParser
from xml.etree import ElementTree


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.meta = {}
        self.canonicals = []
        self.links = []
        self.times = []
        self.schemas = []
        self.title = ""
        self.h1 = 0
        self.breadcrumbs = False
        self.breadcrumb_links = []
        self.in_breadcrumbs = False
        self.in_title = False
        self.in_schema = False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta":
            key = attrs.get("name", attrs.get("property"))
            self.meta.setdefault(key, []).append(attrs.get("content", ""))
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs["href"])
        if tag == "a" and "href" in attrs:
            self.links.append(attrs["href"])
            if self.in_breadcrumbs:
                self.breadcrumb_links.append(attrs["href"])
        if tag == "time":
            self.times.append(attrs.get("datetime", ""))
        if tag == "h1":
            self.h1 += 1
        if tag == "nav" and attrs.get("aria-label") == "Fil d’Ariane":
            self.breadcrumbs = True
            self.in_breadcrumbs = True
        if tag == "title":
            self.in_title = True
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.in_schema = True
            self.schemas.append("")

    def handle_endtag(self, tag):
        if tag == "nav":
            self.in_breadcrumbs = False
        if tag == "title":
            self.in_title = False
        if tag == "script":
            self.in_schema = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_schema:
            self.schemas[-1] += data


def unique_keys(pairs):
    result = {}
    for key, value in pairs:
        assert key not in result, f"Duplicate JSON key: {key}"
        result[key] = value
    return result


def main():
    args = [arg for arg in sys.argv[1:] if arg != "--preview"]
    root = Path(args[0] if args else "dist")
    preview = "--preview" in sys.argv
    sitemap = ElementTree.parse(root / "sitemap.xml")
    urls = {item.text for item in sitemap.findall(".//{*}loc")}
    errors = []
    pages = articles = profiles = paginated = 0

    def exists(url):
        path = root / unquote(urlparse(url).path).lstrip("/")
        return (path / "index.html").is_file() if path.is_dir() else path.is_file()

    for path in sorted(root.rglob("*.html")):
        static_path = Path(__file__).resolve().parent.parent / "site/static" / path.relative_to(root)
        if static_path.is_file():
            continue
        page = Page(path.read_text())
        if "application-name" not in page.meta:
            continue
        pages += 1
        try:
            assert len(page.canonicals) == 1, "Expected one canonical URL"
            canonical = page.canonicals[0]
            assert urlparse(canonical).scheme in ("http", "https"), "Canonical is not absolute"
            actual_path = "/" + path.relative_to(root).as_posix()
            actual_path = re.sub(r"index\.html$", "", actual_path)
            assert unquote(urlparse(canonical).path) == actual_path, "Canonical points to another page"
            assert len(page.meta.get("description", [])) == 1, "Expected one description"
            description = page.meta["description"][0]
            assert 0 < len(description) <= 160, "Description is empty or too long"
            assert page.meta.get("og:description") == [description], "Social description differs"
            assert page.meta.get("twitter:description") == [description], "Twitter description differs"
            assert page.meta.get("og:url") == [canonical], "Social URL differs"
            robots = page.meta.get("robots", [""])[0]
            assert robots, "Missing robots directive"
            if "noindex" not in robots:
                assert page.h1 == 1, f"Expected one H1, got {page.h1}"
            if preview or path.name == "404.html":
                assert "noindex" in robots, "Preview/404 must not be indexed"
            if "noindex" in robots and not preview:
                assert canonical not in urls, "Noindex page appears in sitemap"
            if "/page/" in actual_path:
                paginated += 1
                number = actual_path.rstrip("/").split("/")[-1]
                assert f"Page {number}" in page.title, "Pagination title is not distinct"
            assert len(page.schemas) == 1, "Expected one JSON-LD graph"
            graph = json.loads(page.schemas[0], object_pairs_hook=unique_keys)
            assert graph["@context"] == "https://schema.org"
            by_type = {item["@type"]: item for item in graph["@graph"]}
            assert "WebSite" in by_type and "Organization" in by_type
            if "BlogPosting" in by_type:
                articles += 1
                article = by_type["BlogPosting"]
                assert article["description"] == description, "JSON-LD description differs from metadata"
                assert isinstance(article.get("author"), list) and article["author"], "Missing authors"
                for author in article["author"]:
                    assert author["name"] and exists(author["url"]), "Missing author profile"
                    assert author["url"] in page.links, "Author is not visibly linked"
                assert article.get("image") and all(exists(url) for url in article["image"]), "Missing image"
                published = article["datePublished"]
                modified = article["dateModified"]
                assert published in page.times, "Publication date differs from visible date"
                assert datetime.fromisoformat(modified) >= datetime.fromisoformat(published), "Modification predates publication"
                assert page.meta.get("og:type") == ["article"]
            if "ProfilePage" in by_type:
                profiles += 1
                assert by_type["Person"]["name"], "Profile has no person name"
            if "BreadcrumbList" in by_type:
                assert page.breadcrumbs, "Breadcrumb schema has no visible navigation"
                assert page.breadcrumb_links, "Breadcrumb has no navigation links"
                for href in page.breadcrumb_links:
                    assert href.startswith("/") and not href.startswith("//"), "Breadcrumb link must use the current host"
                    assert exists(href), f"Broken breadcrumb navigation: {href}"
                breadcrumb_urls = {urljoin(canonical, href) for href in page.breadcrumb_links}
                items = by_type["BreadcrumbList"]["itemListElement"]
                assert len(items) >= 2
                for position, item in enumerate(items, 1):
                    assert item["position"] == position and item["name"]
                    assert urlparse(item["item"]).netloc == urlparse(canonical).netloc, "Breadcrumb schema uses a different host from the page"
                    assert exists(item["item"]), f"Broken breadcrumb: {item['item']}"
                    if position < len(items):
                        assert item["item"] in breadcrumb_urls, "Breadcrumb ancestor is not linked in the navigation"
            elif actual_path != "/" and "/page/" not in actual_path and path.name != "404.html":
                raise AssertionError("Missing breadcrumb schema")
        except (AssertionError, KeyError, ValueError) as error:
            errors.append(f"{path}: {error}")
    assert pages and articles and profiles and paginated, "Incomplete build: missing page types"
    for url in urls:
        if not exists(url):
            errors.append(f"Sitemap references missing page: {url}")
    robots = RobotFileParser()
    robots.parse((root / "robots.txt").read_text().splitlines())
    assert robots.site_maps(), "Missing sitemap declaration in robots.txt"
    for bot in ("Googlebot", "Bingbot", "OAI-SearchBot"):
        assert robots.can_fetch(bot, "/fr/articles/"), f"{bot} cannot crawl articles"
    if errors:
        print("\n".join(errors))
        sys.exit(1)
    print(f"SEO OK: {pages} pages, {articles} articles, {profiles} profils, {paginated} pages de pagination ; sitemap et robots.txt valides.")


if __name__ == "__main__":
    main()
