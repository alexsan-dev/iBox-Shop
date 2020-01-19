self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.aa4a883c6b33cefc3220.js",
    "revision": "72ced08c307c2c5a308d"
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
    "url": "/_next/static\\wtZWGGdVq1BENsZSb9mpX\\pages\\_app.js",
    "revision": "ea3fcbbe496bc848d4f3"
  },
  {
    "url": "/_next/static\\wtZWGGdVq1BENsZSb9mpX\\pages\\_error.js",
    "revision": "e1a0fdfe6b021c35c031"
  },
  {
    "url": "/_next/static\\wtZWGGdVq1BENsZSb9mpX\\pages\\cuenta.js",
    "revision": "991713a355d406d1862e"
  },
  {
    "url": "/_next/static\\wtZWGGdVq1BENsZSb9mpX\\pages\\index.js",
    "revision": "ab2118aa1c414539df45"
  },
  {
    "url": "/_next/static\\wtZWGGdVq1BENsZSb9mpX\\pages\\tienda.js",
    "revision": "f0817410a79ff535535f"
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
