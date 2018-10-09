const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body'
})

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['public']);

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_module/
        }
    ]},
    plugins: [
        HtmlWebpackPluginConfig, CleanWebpackPlugin
    ]
}

module.exports = config; 