self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.d94483c747c28bfc606e.js",
    "revision": "441c05110c4b26c038a9"
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
    "url": "/_next/static\\nObWQjil3PY6_RPFd8zW_\\pages\\_app.js",
    "revision": "dad905834588ca84a693"
  },
  {
    "url": "/_next/static\\nObWQjil3PY6_RPFd8zW_\\pages\\_error.js",
    "revision": "3acc9acbfaf7b4155f69"
  },
  {
    "url": "/_next/static\\nObWQjil3PY6_RPFd8zW_\\pages\\carrito.js",
    "revision": "80b94667ddb44a0d353a"
  },
  {
    "url": "/_next/static\\nObWQjil3PY6_RPFd8zW_\\pages\\cuenta.js",
    "revision": "cd221d4e060802865633"
  },
  {
    "url": "/_next/static\\nObWQjil3PY6_RPFd8zW_\\pages\\index.js",
    "revision": "65b891c577c7936da8a2"
  },
  {
    "url": "/_next/static\\nObWQjil3PY6_RPFd8zW_\\pages\\tienda.js",
    "revision": "d56901c08899d5cc93f5"
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
