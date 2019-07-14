importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/39e3699198530782ce24.js",
    "revision": "194086a1e56219897a5c25c77b9aaa7e"
  },
  {
    "url": "/_nuxt/6f79878c820c92a15520.js",
    "revision": "54a45287309d85deb0f5d962dc70b6ac"
  },
  {
    "url": "/_nuxt/aa3aa8417124fad27061.js",
    "revision": "312acf2be42101017156de52fe84e163"
  },
  {
    "url": "/_nuxt/e8ca05f0525637814519.js",
    "revision": "e50420e13956b7e0aefc5f48f40ab87d"
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
