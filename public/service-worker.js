self.__precacheManifest = [
  {
    "url": "/_next/a37b0c01c0baf1888ca812cc0508f6e2.ttf"
  },
  {
    "url": "/_next/e79bfd88537def476913f3ed52f4f4b3.eot"
  },
  {
    "url": "/_next/static/chunks/commons.a3f26d499acced34516e.js",
    "revision": "ad7664fe31aa1ef2170f"
  },
  {
    "url": "/_next/static/chunks/styles.d84bb11b4445aeff21d4.js",
    "revision": "7a93e09019de82057751"
  },
  {
    "url": "/_next/static/css/styles.b10b333f.chunk.css",
    "revision": "7a93e09019de82057751"
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
    "url": "/_next/static\\Twi2yoHPkShrOCSWM7Wst\\pages\\_app.js",
    "revision": "9097c2589a1a3c6663c7"
  },
  {
    "url": "/_next/static\\Twi2yoHPkShrOCSWM7Wst\\pages\\_error.js",
    "revision": "d6bd91c5e37f12d33bfb"
  },
  {
    "url": "/_next/static\\Twi2yoHPkShrOCSWM7Wst\\pages\\cuenta.js",
    "revision": "d13aadb29d9e48e7fa69"
  },
  {
    "url": "/_next/static\\Twi2yoHPkShrOCSWM7Wst\\pages\\index.js",
    "revision": "4ea1e3b8351f3ece2b49"
  },
  {
    "url": "/_next/static\\Twi2yoHPkShrOCSWM7Wst\\pages\\tienda.js",
    "revision": "2b64fba1107fb4c5787b"
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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName": "offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
