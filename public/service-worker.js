self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.e9478030d96ca1ed06b2.js",
    "revision": "552b9c8135c01d20647d"
  },
  {
    "url": "/_next/static/runtime/main-801bb775b2b240d1c084.js",
    "revision": "fbb8be732c4e52fcea7d"
  },
  {
    "url": "/_next/static/runtime/polyfills-f5af81b00d12d923ec0f.js",
    "revision": "c133b2cadab912d169ad"
  },
  {
    "url": "/_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "be4b6cc6d10632d2262c"
  },
  {
    "url": "/_next/static\\zcf6WZ7hL_jB0GiNMLUq-\\pages\\_app.js",
    "revision": "d28b1c3449f2d4cbebfc"
  },
  {
    "url": "/_next/static\\zcf6WZ7hL_jB0GiNMLUq-\\pages\\_error.js",
    "revision": "5b3a6dd67777a6aee70c"
  },
  {
    "url": "/_next/static\\zcf6WZ7hL_jB0GiNMLUq-\\pages\\carrito.js",
    "revision": "abf185ada02ce2eb1bb5"
  },
  {
    "url": "/_next/static\\zcf6WZ7hL_jB0GiNMLUq-\\pages\\cuenta.js",
    "revision": "56099ef37bd87860de21"
  },
  {
    "url": "/_next/static\\zcf6WZ7hL_jB0GiNMLUq-\\pages\\index.js",
    "revision": "33eb4d50b7a3ccbd998e"
  },
  {
    "url": "/_next/static\\zcf6WZ7hL_jB0GiNMLUq-\\pages\\tienda.js",
    "revision": "59d3f1ce36b8a108e79f"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|gif|svg|eot|ttf|woff|woff2)$/, new workbox.strategies.CacheFirst({ "cacheName":"assets", plugins: [] }), 'GET');
