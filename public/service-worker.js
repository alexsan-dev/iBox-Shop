self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.c32d9b5fa3d9c7a31128.js",
    "revision": "b00c388e3f90a091beb0"
  },
  {
    "url": "/_next/static/chunks/styles.5d52b288d34ea8c2230d.js",
    "revision": "0f6291d9a6001a301c3c"
  },
  {
    "url": "/_next/static/css/styles.d65353f8.chunk.css",
    "revision": "0f6291d9a6001a301c3c"
  },
  {
    "url": "/_next/static/runtime/main-801bb775b2b240d1c084.js",
    "revision": "fbb8be732c4e52fcea7d"
  },
  {
    "url": "/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "/_next/static\\q8Kh0gcC_ny0HkmQ6DKp4\\pages\\_app.js",
    "revision": "b4ebb0a0201dbe99377c"
  },
  {
    "url": "/_next/static\\q8Kh0gcC_ny0HkmQ6DKp4\\pages\\_error.js",
    "revision": "a336c53d8baa4bd6c82f"
  },
  {
    "url": "/_next/static\\q8Kh0gcC_ny0HkmQ6DKp4\\pages\\cuenta.js",
    "revision": "ce02069ac244191df43b"
  },
  {
    "url": "/_next/static\\q8Kh0gcC_ny0HkmQ6DKp4\\pages\\index.js",
    "revision": "0f83cc9ca428e771f535"
  },
  {
    "url": "/_next/static\\q8Kh0gcC_ny0HkmQ6DKp4\\pages\\tienda.js",
    "revision": "1064774938c6bcaaf869"
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
