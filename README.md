 # Honey Thakuria — Portfolio (source)

  Source code for my personal portfolio. Built with [Nuxt.js](https://nuxtjs.org) (Vue 2)
  and published as a static site to GitHub Pages.

  🔗 **Live:** https://honey93.github.io/

  ## How deployment works

  This repo holds the **source code**. The built static site is published to a
  separate repo, **[`honey93.github.io`](https://github.com/honey93/honey93.github.io)**,
  which GitHub Pages serves at https://honey93.github.io/ (a *user page*, so the
  base path is `/`).

  Publishing is **automated** — see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

  > Every push to `master` runs the workflow, which builds the site
  > (`npm run generate`) and pushes the output to the `honey93.github.io` repo.

  So the normal workflow is just:

  edit → commit/push to master → site updates automatically

  After a deploy, hard-refresh the live site (Cmd/Ctrl + Shift + R) — a service
  worker (`sw.js`) caches the page and may otherwise show the old version.

  ### One-time setup (already done)
  
  The workflow needs a token to push to the other repo. A Personal Access Token
  with write access to `honey93.github.io` is stored in this repo under
  **Settings → Secrets and variables → Actions** as the secret **`DEPLOY_TOKEN`**.

  ## Local development

  > **Note:** Nuxt 2 / webpack 4 needs the legacy OpenSSL provider on Node 18+.                                  
  > It's baked into the npm scripts via `cross-env`, so the commands below work as-is.

  ```bash
  npm install          # install dependencies
  npm run dev          # dev server with hot reload at http://localhost:3000                                     
  npm run generate     # build the static site into ./dist (root base path "/")

  Editing content

  All content lives in the Vuex store — no need to touch templates:

  - store/index.js — about text, skills, experience timeline, projects, also-roles
  - store/blogs.js — articles list

  Layout/styling lives in pages/*.vue and components/*.vue.

  Manual deploy (fallback, if Actions is unavailable)
  
  npm run generate                     # output in ./dist (base "/")
  # then publish the CONTENTS of ./dist into the honey93.github.io repo,
  # keeping a .nojekyll file at its root so the _nuxt/ folder is served.

  Contact form
  
  pages/contact/index.vue posts to Formspree (https://formspree.io/) at
  https://formspree.io/f/xvovqpyr. Swap that form ID in the form action to
  point it elsewhere.
  
  Tech

  Nuxt.js (Vue 2) · Vuex · Bootstrap-Vue · Font Awesome · deployed to GitHub Pages.
  
  ---
