importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/025b2706d1d95c6d396b.js",
    "revision": "bdec129d1ba43add46702e1729b5603f"
  },
  {
    "url": "/_nuxt/2896cdd581bb524001c7.js",
    "revision": "c5e807e87e3736c607180c8483bca325"
  },
  {
    "url": "/_nuxt/c8b4b89bd435a110167a.js",
    "revision": "b67e7838532dc6354137929da76c79e6"
  },
  {
    "url": "/_nuxt/f27df96b2f1efbc1d177.js",
    "revision": "5de3bfc02ff2bc5fb681bf3298410dc0"
  },
  {
    "url": "/_nuxt/f8cc6a5bc8b94b6c6044.js",
    "revision": "b67c5057e1feafb210fe1c789ff6bddd"
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
