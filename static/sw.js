importScripts('/Personal-Website/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/Personal-Website/_nuxt/137cfb0.js",
    "revision": "f81677b3e72a6d37c6744ffbc91e1472"
  },
  {
    "url": "/Personal-Website/_nuxt/5f13180.js",
    "revision": "354b630c9f700fb15f2dd8bb5985e35c"
  },
  {
    "url": "/Personal-Website/_nuxt/68fe295.js",
    "revision": "6dcf805a47a5df417f723c0a07f719e1"
  },
  {
    "url": "/Personal-Website/_nuxt/acf2e22.js",
    "revision": "4aac2b03da34c6c0e493bb36c891cd88"
  },
  {
    "url": "/Personal-Website/_nuxt/ae5665f.js",
    "revision": "f5f0efc2775ce76303c9d361bb9e59a4"
  },
  {
    "url": "/Personal-Website/_nuxt/af314ee.js",
    "revision": "ddb5bc38ad73d00de67a723251ef2820"
  },
  {
    "url": "/Personal-Website/_nuxt/bdc1d8b.js",
    "revision": "9f34c4c48259dbf7163eaaa2c7a206bc"
  },
  {
    "url": "/Personal-Website/_nuxt/d2bdfe6.js",
    "revision": "494eb0be7488a927703064757de5ba1a"
  }
], {
  "cacheId": "honeythakuria",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/Personal-Website/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/Personal-Website/.*'), workbox.strategies.networkFirst({}), 'GET')
