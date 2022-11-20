const path = require ('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'main.js'
    },

    /* Настройки webpack-dev-server */
    devServer: {
        static: './dist',
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                loader: 'babel-loader'
            }
        ]
    }
};