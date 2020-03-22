self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.00123f64a29a48d6de62.js",
    "revision": "922b28a9948f33b9c548"
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
    "url": "/_next/static\\xt6-vyMcxHcK9FfDe0uJf\\pages\\_app.js",
    "revision": "d4b78496375cda6382f2"
  },
  {
    "url": "/_next/static\\xt6-vyMcxHcK9FfDe0uJf\\pages\\_error.js",
    "revision": "8eab9b2828312f7311ac"
  },
  {
    "url": "/_next/static\\xt6-vyMcxHcK9FfDe0uJf\\pages\\carrito.js",
    "revision": "c1d1a02e9d053bfe9897"
  },
  {
    "url": "/_next/static\\xt6-vyMcxHcK9FfDe0uJf\\pages\\cuenta.js",
    "revision": "02cc78a68581a6a2778e"
  },
  {
    "url": "/_next/static\\xt6-vyMcxHcK9FfDe0uJf\\pages\\index.js",
    "revision": "f8fbaf31af7a29d2b051"
  },
  {
    "url": "/_next/static\\xt6-vyMcxHcK9FfDe0uJf\\pages\\tienda.js",
    "revision": "bba2bb4244741dedfbb3"
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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.CacheFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|gif|svg|eot|ttf|woff|woff2)$/, new workbox.strategies.CacheFirst({ "cacheName":"assets", plugins: [] }), 'GET');
