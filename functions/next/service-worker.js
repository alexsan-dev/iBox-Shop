self.__precacheManifest = [
  {
    "url": "/_next/a37b0c01c0baf1888ca812cc0508f6e2.ttf"
  },
  {
    "url": "/_next/e79bfd88537def476913f3ed52f4f4b3.eot"
  },
  {
    "url": "/_next/static/chunks/commons.c32d9b5fa3d9c7a31128.js",
    "revision": "b00c388e3f90a091beb0"
  },
  {
    "url": "/_next/static/chunks/styles.bdfa09aa683c705ee1f1.js",
    "revision": "69d1a04626ca5070dde4"
  },
  {
    "url": "/_next/static/css/styles.5999176d.chunk.css",
    "revision": "69d1a04626ca5070dde4"
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
    "url": "/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "/_next/static\\jJz0g6h6TPe9oIxqNq7p5\\pages\\_app.js",
    "revision": "7fd14778a589af3b8951"
  },
  {
    "url": "/_next/static\\jJz0g6h6TPe9oIxqNq7p5\\pages\\_error.js",
    "revision": "99976ccd3db724a3f0df"
  },
  {
    "url": "/_next/static\\jJz0g6h6TPe9oIxqNq7p5\\pages\\cuenta.js",
    "revision": "90d4255d812e3a12b440"
  },
  {
    "url": "/_next/static\\jJz0g6h6TPe9oIxqNq7p5\\pages\\index.js",
    "revision": "9db5c1b1d58133851537"
  },
  {
    "url": "/_next/static\\jJz0g6h6TPe9oIxqNq7p5\\pages\\tienda.js",
    "revision": "4f83a5ac46017ce51575"
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
