const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    mode: 'none',
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
    },
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
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new cleanWebpackPlugin(['src/trash', 'dist']),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            filename: 'hello-world.html',
            chunks: ['hello-world', 'vendors~hello-world~kiwi'],
            meta: {
                viewport: 'width=device-width initial-scale=1'    
            }
        }),
        new HtmlWebpackPlugin({
            title: 'kiwi',
            filename: 'kiwi.html',
            chunks: ['kiwi', 'vendors~hello-world~kiwi'],
            meta: {
                viewport: 'width=device-width initial-scale=1'    
            }
        })
    ]
}