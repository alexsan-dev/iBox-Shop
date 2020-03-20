self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.0b8b41c597209e2a67f9.js",
    "revision": "8261b6cb4b5d84a8064c"
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
    "url": "/_next/static\\ldrvxoIawcQHYQrnG_uHt\\pages\\_app.js",
    "revision": "61fbc1687b28f8668c30"
  },
  {
    "url": "/_next/static\\ldrvxoIawcQHYQrnG_uHt\\pages\\_error.js",
    "revision": "ea72e02dc815a41fc5aa"
  },
  {
    "url": "/_next/static\\ldrvxoIawcQHYQrnG_uHt\\pages\\cuenta.js",
    "revision": "204e6e7418ff2a931f5d"
  },
  {
    "url": "/_next/static\\ldrvxoIawcQHYQrnG_uHt\\pages\\index.js",
    "revision": "2d1be92c59017b3c60dc"
  },
  {
    "url": "/_next/static\\ldrvxoIawcQHYQrnG_uHt\\pages\\tienda.js",
    "revision": "6e5c6063604e9079ad32"
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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|gif|svg|eot|ttf|woff|woff2)$/, new workbox.strategies.CacheFirst({ "cacheName":"assets", plugins: [] }), 'GET');
