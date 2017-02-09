const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

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
		path: __dirname + '/build',
		publicPath: '/build',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({fallback: 'style-loader', use: sassLoaders.join('!')})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	resolve: {
		extensions: ['.js', '.jsx', '.sass']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};
