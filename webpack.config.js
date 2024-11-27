const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.[contenthash].js',
		clean: true,
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "assets", to: "assets" },
			],
		}),
	],
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 9000,
	},
};

