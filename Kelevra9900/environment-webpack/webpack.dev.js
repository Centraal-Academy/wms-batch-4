const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src'
    }
};

module.exports = merge(common, config);