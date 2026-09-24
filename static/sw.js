importScripts('/Personal-Website/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/Personal-Website/_nuxt/16480df.js",
    "revision": "cdf0d1e46185c73d0101b6a9203fd510"
  },
  {
    "url": "/Personal-Website/_nuxt/7e493da.js",
    "revision": "483b5512c4e0c2dbda70d855d0d24c87"
  },
  {
    "url": "/Personal-Website/_nuxt/a08f4f5.js",
    "revision": "7196e56a392b7b3e1288c4f642f58c71"
  },
  {
    "url": "/Personal-Website/_nuxt/ac10957.js",
    "revision": "74b49756b149f234322927b8608e7e46"
  },
  {
    "url": "/Personal-Website/_nuxt/ba3168c.js",
    "revision": "c54a917be367788776e99c20268fb142"
  },
  {
    "url": "/Personal-Website/_nuxt/bcf3093.js",
    "revision": "19e15634de6f009514381c6cb8410b7d"
  },
  {
    "url": "/Personal-Website/_nuxt/bfd3568.js",
    "revision": "06632490c91a4a7a1ad106c63abeb907"
  },
  {
    "url": "/Personal-Website/_nuxt/c787611.js",
    "revision": "83a5a0fd038cf9ddaf7f1d568fff8dd3"
  },
  {
    "url": "/Personal-Website/_nuxt/ca30637.js",
    "revision": "207afb542b6cf0abf654d7e202ae31ad"
  },
  {
    "url": "/Personal-Website/_nuxt/f8435f1.js",
    "revision": "aed082bd618966feb8b57b8e3b2f2a7d"
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
