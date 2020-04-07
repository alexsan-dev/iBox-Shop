self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.9fa7a030bcc1a2ef0e9e.js",
    "revision": "8fd74194651747e129b5"
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
    "url": "/_next/static\\mj4fWDx30JzoFMU8qvG5a\\pages\\_app.js",
    "revision": "d75d9416f816f09b9aaa"
  },
  {
    "url": "/_next/static\\mj4fWDx30JzoFMU8qvG5a\\pages\\_error.js",
    "revision": "1d5e6aec64ed2e0f84cb"
  },
  {
    "url": "/_next/static\\mj4fWDx30JzoFMU8qvG5a\\pages\\carrito.js",
    "revision": "0a14f9d7d6e7f7e40664"
  },
  {
    "url": "/_next/static\\mj4fWDx30JzoFMU8qvG5a\\pages\\cuenta.js",
    "revision": "b5cca30f82327ade0267"
  },
  {
    "url": "/_next/static\\mj4fWDx30JzoFMU8qvG5a\\pages\\index.js",
    "revision": "39d2b7afd9a9eaf25f0f"
  },
  {
    "url": "/_next/static\\mj4fWDx30JzoFMU8qvG5a\\pages\\tienda.js",
    "revision": "4cdfc2bcc51dbf119078"
  },
  {
    "url": "/_next/static\\mj4fWDx30JzoFMU8qvG5a\\pages\\tienda\\[pid].js",
    "revision": "6d4d6cdd02f4b97f17e2"
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
