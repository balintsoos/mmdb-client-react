const path = require('path')
const webpack = require('webpack')
const loaders = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || '3000'

// paths
const root = path.resolve(__dirname)
const src = path.join(root, 'src')

// global css
loaders.push({
  test: /[\/\\](node_modules|global)[\/\\].*\.s?css$/,
  loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap'
})

// local css modules
loaders.push({
  test: /[\/\\]src[\/\\].*\.s?css$/,
  loaders: [
    'style?sourceMap',
    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
    'sass'
  ]
})

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/app.js' // appʼs entry point
  ],

  devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',

  output: {
    path: path.join(root, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.join(src, 'components'),
      utils: path.join(src, 'utils')
    }
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: './public',
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  sassLoader: {
    data: '@import "styles/Theme.scss";',
    includePaths: [path.resolve(__dirname, './src/')]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ]
}
