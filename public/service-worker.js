self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.cf48ec0af7bf3f40db9b.js",
    "revision": "7b3681ce9353e6f2af72"
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
    "url": "/_next/static\\or-JaF683k_J_68HLCqZb\\pages\\_app.js",
    "revision": "4b02b3ae2c30d735b2d6"
  },
  {
    "url": "/_next/static\\or-JaF683k_J_68HLCqZb\\pages\\_error.js",
    "revision": "0f002327d1660a0d8baf"
  },
  {
    "url": "/_next/static\\or-JaF683k_J_68HLCqZb\\pages\\carrito.js",
    "revision": "7d9ed6a52b842e08de92"
  },
  {
    "url": "/_next/static\\or-JaF683k_J_68HLCqZb\\pages\\cuenta.js",
    "revision": "637c4ccb4c3a03798c14"
  },
  {
    "url": "/_next/static\\or-JaF683k_J_68HLCqZb\\pages\\index.js",
    "revision": "a1c005c9b8a2f4d3a191"
  },
  {
    "url": "/_next/static\\or-JaF683k_J_68HLCqZb\\pages\\tienda.js",
    "revision": "780df8dacb8c108374df"
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
