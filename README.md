# Honey Thakuria — Portfolio

Personal portfolio of **Honey Thakuria**, Full-Stack Engineer. Built with [Nuxt.js](https://nuxtjs.org) (Vue 2) and deployed as a fully static site to **GitHub Pages**.

🔗 **Live:** https://honey93.github.io/Personal-Website/

## Sections

- **Hero** with an animated typing effect of core technologies
- **About** + career highlights
- **Skills & Tools** grouped by area
- **Experience** timeline (Intuit → Cognizant) with the also-roles strip
- **Selected Work** project cards
- **Writing** — articles from freeCodeCamp, Codeburst, HackerNoon & Medium
- **Contact** form (via Formspree)

## Local development

> **Note:** This project uses Nuxt 2 / webpack 4. On Node 18+ you must run with the
> legacy OpenSSL provider — it's already baked into the npm scripts via `cross-env`,
> so the commands below work as-is.

```bash
#install steps
 git clone https://github.com/honey93/Personal-Website.git
  cd Personal-Website
  npm install
  npm run build:docs    # the script I added: builds + makes docs/ + .nojekyll
  git add docs
  git commit -m "Build docs"
  git push


```

## Deployment (GitHub Pages)

Deployment is automated via **GitHub Actions** (`.github/workflows/deploy.yml`).
Every push to `master` builds the static site and publishes it.

**One-time setup:** In your repo, go to **Settings → Pages → Build and deployment**
and set **Source = GitHub Actions**.

### Project page vs. user page

The site is configured for a **project page** (`https://honey93.github.io/Personal-Website/`),
so the build sets a base path via the `GH_PAGES=project` env var (see the workflow).

If you instead deploy to a **user page** (`https://honey93.github.io`) or a custom domain,
remove the `GH_PAGES: project` line from the workflow so the base path stays `/`.

### Manual deploy

```bash
GH_PAGES=project npm run generate   # output in ./dist
# then publish ./dist however you like (e.g. gh-pages branch)
```

## Editing content

All content lives in the Vuex store — no need to touch templates:

- **`store/index.js`** — about text, skills, experience timeline, projects, also-roles
- **`store/blogs.js`** — articles list

## Contact form

`pages/contact/index.vue` posts to [Formspree](https://formspree.io/) at
`https://formspree.io/f/xvovqpyr`. To point it at a different form, swap that
form ID in the form `action`.
