const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.[contenthash]js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpeg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env'],
                        plugins: [ 'transform-class-properties' ]
                    }
                }
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['src/trash', 'dist']),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            filename: 'custom_file.html',
            meta: {
                viewport: 'width=device-width initial-scale=1'    
            }
        })
    ]
}