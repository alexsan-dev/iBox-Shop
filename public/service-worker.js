self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.cc2ce3def08854ad3118.js",
    "revision": "ff0ace2f15f8f61d60f1"
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
    "url": "/_next/static\\tgEyLM_pjBaGDEkarfSkQ\\pages\\_app.js",
    "revision": "f4c7f2c4301d9804d15c"
  },
  {
    "url": "/_next/static\\tgEyLM_pjBaGDEkarfSkQ\\pages\\_error.js",
    "revision": "058fab46289fc5b47aa7"
  },
  {
    "url": "/_next/static\\tgEyLM_pjBaGDEkarfSkQ\\pages\\carrito.js",
    "revision": "89ffd7acc1697294004b"
  },
  {
    "url": "/_next/static\\tgEyLM_pjBaGDEkarfSkQ\\pages\\cuenta.js",
    "revision": "f4b6475d07e4fa013d7d"
  },
  {
    "url": "/_next/static\\tgEyLM_pjBaGDEkarfSkQ\\pages\\index.js",
    "revision": "e9c24d04d4cda90298ff"
  },
  {
    "url": "/_next/static\\tgEyLM_pjBaGDEkarfSkQ\\pages\\tienda.js",
    "revision": "f3de7c530616f94b6bef"
  }
];

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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName": "offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|gif|svg|eot|ttf|woff|woff2)$/, new workbox.strategies.CacheFirst({ "cacheName": "assets", plugins: [] }), 'GET');
