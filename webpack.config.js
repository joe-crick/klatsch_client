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
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.sass']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
