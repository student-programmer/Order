const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    mode: 'development',
    // Tell webpack to root file of our server app
    entry: './src/client/client.js',

    // Tell webpack where to put output file
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    devtool: 'inline-source-map'
};

module.exports = merge(baseConfig, config);
