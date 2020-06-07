importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/c8b4b89bd435a110167a.js",
    "revision": "b67e7838532dc6354137929da76c79e6"
  },
  {
    "url": "/_nuxt/ecb8cb06a3d1abed2d47.js",
    "revision": "20e76dde27760b6109c035417a86cd3f"
  },
  {
    "url": "/_nuxt/edb2f94e92689f8ae49a.js",
    "revision": "c6237d9b5ea8a0db873ce7808ed93ac1"
  },
  {
    "url": "/_nuxt/f27df96b2f1efbc1d177.js",
    "revision": "5de3bfc02ff2bc5fb681bf3298410dc0"
  },
  {
    "url": "/_nuxt/fcd3bb308d579451d7f0.js",
    "revision": "e61734661909fff78a06080182c71efd"
  }
], {
  "cacheId": "devsrtp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
