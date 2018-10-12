const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
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
                    miniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        new miniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new cleanWebpackPlugin(['src/trash', 'dist']),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            filename: 'index.html',
            meta: {
                viewport: 'width=device-width initial-scale=1'    
            }
        })
    ]
}