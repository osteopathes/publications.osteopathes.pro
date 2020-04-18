import lunr from "lunr";

document.addEventListener("DOMContentLoaded", function () {
    let searchResults = [];
    let urlParams = new URLSearchParams(window.location.search);
    const searchResultsContainer = document.querySelector("#js-search-results");
    const searchQuery = urlParams.get('q');

    const searchQueryPlaceholder = document.querySelector("#js-search-query");
    searchQueryPlaceholder.innerHTML = searchQuery;

    function mark(content, search) {
        if (search) {
            let pattern = /^[a-zA-Z0-9]*:/i;
            search.split(" ").forEach(function (s) {
                if (pattern.test(s)) {
                    s = s.replace(pattern, "");
                }
                if (s && s.startsWith("+")) {
                    s = s.substring(1);
                }
                if (s && s.indexOf("~") > 0 && s.length > s.indexOf("~") && parseInt(s.substring(s.indexOf("~") + 1)) == s.substring(s.indexOf("~") + 1)) {
                    s = s.substring(0, s.indexOf("~"));
                }
                if (!s || s.startsWith("-")) {
                    return;
                }
                let re = new RegExp(s, "i");
                content = content.replace(re, function (m) {
                    return "<mark>"+m+"</mark>";
                });
            });
        }

        return content;
    }

    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/search-index');
    xhr.onload = function() {
        try {
            const data = JSON.parse(xhr.responseText);
            const searchIndex = lunr(function() {
                this.ref("id")
                this.field("content");
                this.field("title");
                this.field("url");

                Array.from(data).forEach(function (doc) {
                    this.add(doc)
                }, this);
            })

            searchResults = searchIndex.search(searchQuery);

            if (searchResults.length > 0) {
                searchResultsContainer.innerHTML = `<div class="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul>` + searchResults.map(function (match) {
                    const item = data.find(function(e) {
                        return e.id == parseInt(match.ref)
                    });
                    const markedContent = mark(item.content, searchQuery);

                    const markIndex = markedContent.indexOf("<mark>");
                    const startExtract = (markIndex - 200) < 0 ? 0 : markIndex - 200;

                    let extractedContent = "";
                    if (startExtract > 0) {
                        extractedContent = "&hellip;"
                    }
                    extractedContent = extractedContent + markedContent.substring(startExtract, markIndex + 200)
                    if ((markIndex + 200) < markedContent.length) {
                        extractedContent = extractedContent + "&hellip;";
                    }

                    return `

                    <li class="border-t border-gray-200">
                      <a href="${item.url}" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                        <div class="px-4 py-4 sm:px-6">
                          <div class="block">
                            <div class="mb-4 text-base leading-5 font-medium text-teal-600 md:truncate">
                              ${mark(item.title, searchQuery)}
                            </div>
                            <div class="mb-4 text-sm leading-5 font-medium text-gray-400 md:truncate">
                              ${mark(item.url, searchQuery)}
                            </div>
                            <div class="block text-gray-600">
                              ${extractedContent}
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    `
                }).join("") + `</ul></div>`
            } else {
                searchResultsContainer.innerHTML = '<p class="text-xl text-teal-700">Aucun résultat trouvé</p>'
            }

        } catch (err) {
            console.log(err);
        }
    };
    xhr.send();

});