const Precache = require('./sw-precache-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const webpackProd = require('./webpack.common');

webpackProd.output.publicPath = '/public';
webpackProd.output.path = path.resolve(__dirname, 'public/');
webpackProd.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }));
webpackProd.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
}));

webpackProd.plugins.push(new Precache({
  cacheId: 'klatsch',
  filename: 'public/klatsch-service-worker.js',
  minify: false,
  staticFileGlobsIgnorePatterns: [/\.map$/],
  runtimeCaching: [
    {
      urlPattern: '/',
      handler: 'cacheFirst',
    }
  ]
}))

webpackProd.module.rules.push({
    test: /\.png$/,
    loader: 'file'
  });
webpackProd.module.rules.push({
  test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  loader: 'file'
});

module.exports = webpackProd;