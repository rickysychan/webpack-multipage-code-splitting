const path = require('path')
// const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        index: 'index.html',
        port: 9000
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
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            meta: {
                viewport: 'width=device-width initial-scale=1'    
            }
        }),
        new HtmlWebpackPlugin({
            title: 'kiwi',
            filename: 'kiwi.html',
            chunks: ['kiwi'],
            meta: {
                viewport: 'width=device-width initial-scale=1'    
            }
        })
    ]
}