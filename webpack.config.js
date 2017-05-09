const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './app/app.jsx',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './app'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: "babel-loader",
                query: {
                    presets: ['babel-preset-react', 'babel-preset-es2015']
                }
            }
        ]
    }
    
}

module.exports = config;