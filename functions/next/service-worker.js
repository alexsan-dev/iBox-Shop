self.__precacheManifest = [
  {
    "url": "/_next/a37b0c01c0baf1888ca812cc0508f6e2.ttf"
  },
  {
    "url": "/_next/e79bfd88537def476913f3ed52f4f4b3.eot"
  },
  {
    "url": "/_next/static/chunks/commons.834c54a23dfa8937f195.js",
    "revision": "d0e26f6aac1655de4910"
  },
  {
    "url": "/_next/static/chunks/styles.fc58ed1bb4b463c1f9e8.js",
    "revision": "5651c59e4598d89e9dc9"
  },
  {
    "url": "/_next/static/css/styles.0a156897.chunk.css",
    "revision": "5651c59e4598d89e9dc9"
  },
  {
    "url": "/_next/static/runtime/main-b62e6565c395bcef4fa2.js",
    "revision": "21c7559f6a2d8ea86102"
  },
  {
    "url": "/_next/static/runtime/polyfills-2889d9d9fcf08314dd3a.js",
    "revision": "72af0bf5f5ab36df8ae8"
  },
  {
    "url": "/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "/_next/static\\jxyLAs_gmCEUFsqUqYxH9\\pages\\_app.js",
    "revision": "e1fb12182633e36c2943"
  },
  {
    "url": "/_next/static\\jxyLAs_gmCEUFsqUqYxH9\\pages\\_error.js",
    "revision": "14420cefbb4cdb0fffa4"
  },
  {
    "url": "/_next/static\\jxyLAs_gmCEUFsqUqYxH9\\pages\\cuenta.js",
    "revision": "e9ed34242cffc8df7d8d"
  },
  {
    "url": "/_next/static\\jxyLAs_gmCEUFsqUqYxH9\\pages\\index.js",
    "revision": "060de47982e86f848354"
  },
  {
    "url": "/_next/static\\jxyLAs_gmCEUFsqUqYxH9\\pages\\tienda.js",
    "revision": "4b7a8d53f8a3d8101052"
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
