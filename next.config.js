// next.config.js
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_OPTIONS': JSON.stringify('--openssl-legacy-provider'),
      })
    );
    return config;
  },
};
