const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?sourceMap&indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        include: /src/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        include: /src/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
      },
      {
        test: /\.sass$/,
        include: /src/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: sassLoaders.join('!')})
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  }
};
