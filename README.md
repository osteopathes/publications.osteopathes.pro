# Publications

**The git repo of the website  https://publications.osteopathes.pro/**

Copyright – All rights reserved – Osteopathes.pro
Tous droits réservés – Osteopathes.pro

## Theme
This project uses netlify's [victor-hugo](https://github.com/netlify-templates/victor-hugo)
boilerplate. Check their docs for more information.

## Usage

### :exclamation: Prerequisites

You need to have the latest/LTS [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) versions installed in order to use Victor Hugo.

Next step, clone this repository and run:

```bash
npm install
```

This will take some time and will install all packages necessary to run Victor Hugo and its tasks.

### :construction_worker: Development

While developing your website, use:

```bash
npm start
```

or for developing your website with `hugo server --buildDrafts --buildFuture`, use:

```bash
npm run preview
```

Then visit http://localhost:3000/ _- or a new browser windows popped-up already -_ to preview your new website. Webpack Dev Server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### :package: Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

To get a preview of posts or articles not yet published, run:

```bash
npm run build:preview
```

See [package.json](package.json#L8) for all tasks.

### SEO

Les métadonnées sont produites par les partials `seo/page.html` et
`site-schema.html`. Les auteurs d’un article se déclarent avec `auteurs`
(identifiants des pages sous `content/fr/auteurs`). Une `description` explicite
est recommandée ; sinon, un extrait court est généré. `lastmod` doit refléter une
révision réelle du contenu. `no_index: true` exclut une page du sitemap et ajoute
la directive robots correspondante.

La pagination est initialisée une seule fois dans `seo/page.html` ; les modèles
de listes réutilisent `.Paginator` pour garder les mêmes collections et URL.

Après un build de production avec `DEPLOY_PRIME_URL=https://publications.osteopathes.pro/` :

```bash
python3 scripts/check-seo.py dist
```

Pour contrôler un build Netlify de prévisualisation (`CONTEXT=deploy-preview`,
avec les brouillons), ajouter `--preview`. Utiliser un répertoire de sortie neuf
si un ancien build contenait des brouillons : Hugo seul ne supprime pas toujours
les anciens fichiers.

Voir [l’audit de septembre 2026](docs/seo-audit-2026-09.md) pour les constats
Search Console, les corrections et les prochaines priorités.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css seperately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Files in the static folder end up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.

## Environment variables

To separate the development and production _- aka build -_ stages, all gulp tasks run with a node environment variable named either `development` or `production`.

You can access the environment variable inside the theme files with `getenv "NODE_ENV"`. See the following example for a conditional statement:

    {{ if eq (getenv "NODE_ENV") "development" }}You're in development!{{ end }}

All tasks starting with _build_ set the environment variable to `production` - the other will set it to `development`.

## Deploying to Netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.

## Vendors and third party licenses

This project builds upon Netlify's *Victor Hugo* template available on GitHub
under a MIT licence : https://github.com/netlify-templates/victor-hugo

## Enjoy!! 😸
