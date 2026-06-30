# honey93.github.io

This repo hosts the **published static build** of my portfolio. GitHub Pages
serves it at **https://honey93.github.io/**.

> ⚠️ **Do not edit files here by hand.** This repo is generated output.
> The source code lives in **[`Personal-Website`](https://github.com/honey93/Personal-Website)**,
> and a GitHub Actions workflow there builds and force-pushes the site into this
> repo on every push to its `master`. Manual edits here will be overwritten on
> the next deploy.

## To change the site

Edit and push in the **`Personal-Website`** repo. The deploy is automatic —
within ~1 minute this repo updates and the live site reflects the change.
(Hard-refresh with Cmd/Ctrl + Shift + R to bypass the `sw.js` cache.)

## GitHub Pages config

- **Settings → Pages → Source:** Deploy from a branch → `master` / root
- **`.nojekyll`** must stay at the repo root — without it, GitHub Pages strips
  the `_nuxt/` folder and the site renders blank.

## What's in here

Standard Nuxt static-generate output:

- `index.html`, `404.html`, `blogs/`, `contact/` — pages
- `_nuxt/` — JS, CSS, hashed assets, prerendered page payloads
- `*.png` / `*.jpeg` — images
- `.nojekyll` — tells GitHub Pages to serve files as-is
