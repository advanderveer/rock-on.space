var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js'),
  },
  output: {
    filename: 'build/[name].js'
  },
  resolve: {
    extensions: [ '.js', '.html', '.svg' ]
  },
  module: {
    loaders: [
      {
        test: /\.ya?ml$/,
        loader: 'yml-loader'
      },
      {
        test: /\.(svg|html|js)/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: [
            ['es2015', {
              modules: false,
              loose: true
            }],
            'stage-0'
          ]
        }
      },
      {
        test: /\.(svg|html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }]
  },
  devtool: 'inline-source-map'
}
