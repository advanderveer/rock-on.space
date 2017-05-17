const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
	entry: {
		index: path.join(__dirname, 'src/index.js'),
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'build')
	},
	resolve: {
		extensions: [ '.js', '.html', '.svg', '.less' ]
	},
	module: {
		loaders: [
			{
				test: /\.ya?ml$/,
				loader: 'yml-loader'
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						loader: "css-loader!less-loader"
				})
			},
			{
				test: /\.(svg|html|js)/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
				query: {
					presets: [
						/*['es2015', {
							modules: false,
							loose: true
						}],*/
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
	plugins: [
		new ExtractTextPlugin('styles.css'),
	],
	devtool: 'inline-source-map'
}
