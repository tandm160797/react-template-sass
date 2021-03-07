var path = require('path');
var DotenvWebPack = require('dotenv-webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

var vendor = [
	'@reduxjs/toolkit',
	'axios',
	'prop-types',
	'query-string',
	'react',
	'react-dom',
	'react-redux',
	'add react-router-dom'
];
var webpackConfig = {
	entry: {
		bundle: './src/index.jsx',
		vendor
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js?x)$/i,
				use: { loader: 'babel-loader' },
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: { loader: 'file-loader' }
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		alias: {
			'$redux-toolkit': path.resolve(__dirname, 'src/redux-toolkit'),
			$components: path.resolve(__dirname, 'src/components'),
			$features: path.resolve(__dirname, 'src/features'),
			$hooks: path.resolve(__dirname, 'src/hooks'),
			$api: path.resolve(__dirname, 'src/api')
		}
	},
	plugins: [
		new DotenvWebPack(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			favicon: './public/assets/img/favicon.ico',
			excludeChunks: ['vendor']
		})
	],
	performance: {
		hints: false
	},
	devtool: 'eval-source-map',
	context: __dirname
};

module.exports = webpackConfig;
