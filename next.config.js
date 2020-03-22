const withOffline = require("next-offline");
module.exports = withOffline({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    });
    return config;
  },
  distDir: "build",
  poweredByHeader: false,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      },
      {
        urlPattern: /\.(?:png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'assets',
        },
      }
    ]
  }
});
