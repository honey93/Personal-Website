const pkg = require("./package");

// When deploying to a GitHub *project* page the site is served from
// https://<user>.github.io/<repo>/, so assets need a base path.
// Set GH_PAGES=project at build time for that. For a user/org page
// (https://<user>.github.io) or a custom domain, leave it unset.
const isProjectPage = process.env.GH_PAGES === "project";
const repo = "Personal-Website";
const base = isProjectPage ? `/${repo}/` : "/";

module.exports = {
  mode: "universal",
  target: "static",

  router: {
    base
  },

  head: {
    title: "Honey Thakuria — Full-Stack Engineer",
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Honey Thakuria is a Full-Stack Engineer with 10+ years across data, web and cloud — currently at Intuit. Explore projects, experience and writing."
      },
      { name: "theme-color", content: "#3aa8ff" },
      // Open Graph
      { hid: "og:title", property: "og:title", content: "Honey Thakuria — Full-Stack Engineer" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Full-Stack Engineer · 10+ years across data, web and cloud. Currently at Intuit. Open-source contributor, tech blogger and mentor."
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:image", property: "og:image", content: `${base}honeythakuria.png` },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `${base}favicon.ico` },
      { rel: "shortcut icon", type: "image/x-icon", href: `${base}favicon.ico` },
      { rel: "apple-touch-icon", href: `${base}icon.png` },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
        integrity:
          "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Karla:400,700&display=swap&subset=latin-ext",
        crossorigin: "anonymous"
      }
    ]
  },

  loading: { color: "#3aa8ff" },

  css: [],
  plugins: [],

  modules: ["@nuxtjs/axios", "bootstrap-vue/nuxt", "@nuxtjs/pwa"],

  axios: {},

  // Disable the PWA service worker for static hosting to avoid stale caching
  // surprises on GitHub Pages. Manifest/meta still apply.
  pwa: {
    workbox: false
  },

  generate: {
    fallback: "404.html"
  },

  build: {
    extend(config, ctx) {}
  }
};
