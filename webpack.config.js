const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './client/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })

module.exports = {
  entry: {
    'index_bundle'              : './client/index.js'
  },
  output: {
    path      : path.resolve('dist'),
    filename  : './client/dist/[name].js'
  },

  // entry: './client/index.js',
  // output: {
    // path: path.resolve('dist'),
    // filename: './client/dist/index_bundle.js'
  // },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
  // ,
  // plugins: [HtmlWebpackPluginConfig]
}