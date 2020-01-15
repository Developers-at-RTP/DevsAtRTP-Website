importScripts('/DevsAtRTP-Website/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/DevsAtRTP-Website/_nuxt/138950ec1b2c2b62984d.js",
    "revision": "90fa3491e86a6161ca014de2602e5aca"
  },
  {
    "url": "/DevsAtRTP-Website/_nuxt/33577ca33d0a2a6df4a4.js",
    "revision": "88ae0b1694ff5de459ced71f42b58dfa"
  },
  {
    "url": "/DevsAtRTP-Website/_nuxt/8f8522f339d514320e1f.js",
    "revision": "a392c39a46cc073253cedc0cbf87778f"
  },
  {
    "url": "/DevsAtRTP-Website/_nuxt/c2634ee009c9c74b98cb.js",
    "revision": "d0e4d3bf0097357f94bf5892d0a2cf1e"
  }
], {
  "cacheId": "devsrtp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/DevsAtRTP-Website/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/DevsAtRTP-Website/.*'), workbox.strategies.networkFirst({}), 'GET')
