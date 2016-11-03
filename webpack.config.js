var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');

module.exports = {
  devtool: 'source-map',
  entry:  __dirname + "/src/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      srcDir: path.join(__dirname, '/src'),
      testDir: path.join(__dirname, '/test')
    },
    extensions: ['', '.js']
  },
  devServer: {
    contentBase: ".",
    colors: true,
    inline: true,
    stats: 'errors-only',
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel'
      },
      {
        test: /\.(css|less)$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
