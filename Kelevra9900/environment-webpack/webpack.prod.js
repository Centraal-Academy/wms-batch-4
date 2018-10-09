const merge = require('webpack-merge');
const common = require('./webpack.common');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = merge(common, config);