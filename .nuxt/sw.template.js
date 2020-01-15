importScripts('/DevsAtRTP-Website/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([], {
  "cacheId": "devsrtp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/DevsAtRTP-Website/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/DevsAtRTP-Website/.*'), workbox.strategies.networkFirst({}), 'GET')
