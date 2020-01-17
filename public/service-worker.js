self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.be7ee270ba7cd5afcbbc.js",
    "revision": "c0a4a3a6422b961c23dd"
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
    "url": "/_next/static\\idDqy-y8IaoanQC_vWpS8\\pages\\_app.js",
    "revision": "bf7dac67046d79f62d84"
  },
  {
    "url": "/_next/static\\idDqy-y8IaoanQC_vWpS8\\pages\\_error.js",
    "revision": "25ebcde27747294cd610"
  },
  {
    "url": "/_next/static\\idDqy-y8IaoanQC_vWpS8\\pages\\cuenta.js",
    "revision": "16387ad5150db359c45b"
  },
  {
    "url": "/_next/static\\idDqy-y8IaoanQC_vWpS8\\pages\\index.js",
    "revision": "a2ace2220282115d0eb2"
  },
  {
    "url": "/_next/static\\idDqy-y8IaoanQC_vWpS8\\pages\\tienda.js",
    "revision": "01b4ba91425cf8412c37"
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
