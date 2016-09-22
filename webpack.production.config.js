const path = require('path')
const webpack = require('webpack')
const loaders = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')

// paths
const root = path.resolve(__dirname)
const src = path.join(root, 'src')

// local css modules
loaders.push({
  test: /[\/\\]src[\/\\].*\.s?css$/,
  loader: ExtractTextPlugin.extract(
    'style',
    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'
  )
})
// global css files
loaders.push({
  test: /[\/\\](node_modules|global)[\/\\].*\.s?css$/,
  loader: ExtractTextPlugin.extract(
    'style',
    'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap'
  )
})

module.exports = {
  entry: [
    './src/app.js' // appʼs entry point
  ],
  output: {
    path: path.join(root, 'public'),
    filename: '[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.join(src, 'components'),
      labels: path.join(src, 'labels'),
      utils: path.join(src, 'utils')
    }
  },
  module: {
    loaders
  },
  sassLoader: {
    data: '@import "styles/Theme.scss";',
    includePaths: [path.resolve(__dirname, './src/')]
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[contenthash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'MMDb'
    })
  ]
}
