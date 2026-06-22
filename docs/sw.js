importScripts('/Personal-Website/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/Personal-Website/_nuxt/137cfb0.js",
    "revision": "f81677b3e72a6d37c6744ffbc91e1472"
  },
  {
    "url": "/Personal-Website/_nuxt/233905b.js",
    "revision": "035c381f6fa35dc1d200ba39a1a55c6e"
  },
  {
    "url": "/Personal-Website/_nuxt/602c0b0.js",
    "revision": "5d96337be90f713de8095e21c086a0f7"
  },
  {
    "url": "/Personal-Website/_nuxt/7aebdf8.js",
    "revision": "8e62fb1e3c079c1ceb9852fbe3672502"
  },
  {
    "url": "/Personal-Website/_nuxt/ae5665f.js",
    "revision": "f5f0efc2775ce76303c9d361bb9e59a4"
  },
  {
    "url": "/Personal-Website/_nuxt/c167ac9.js",
    "revision": "2a9feeb4e44067fe4cd4c16b5fd76434"
  },
  {
    "url": "/Personal-Website/_nuxt/f02aa9b.js",
    "revision": "45d6c0ab5de0b6ecaf00d11d8ebfc5e3"
  },
  {
    "url": "/Personal-Website/_nuxt/fcb4717.js",
    "revision": "8c9d3b9b3b3146aacc5cd3f866a5ce0c"
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
