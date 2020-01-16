importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0024477e7dbebd85a2a0.js",
    "revision": "5e49ec2251aa93fa48ad3818761e55f6"
  },
  {
    "url": "/_nuxt/33577ca33d0a2a6df4a4.js",
    "revision": "88ae0b1694ff5de459ced71f42b58dfa"
  },
  {
    "url": "/_nuxt/519ee06cd2f79deafb32.js",
    "revision": "bae1104a6a8c9056f5a4518b5a48f454"
  },
  {
    "url": "/_nuxt/87fada5d443c3c5949b3.js",
    "revision": "71441796686e6392f3e3a5a62e687192"
  },
  {
    "url": "/_nuxt/fbe87db2311eeb1fb379.js",
    "revision": "2aeb6b67c25c33e8895d444164a417a3"
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
