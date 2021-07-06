const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { ENVIRONMENT } = process.env;

console.log({ ENVIRONMENT });

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './build')
    },
    plugins: [
        new EnvironmentPlugin({
            ENVIRONMENT
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: 'public'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
    },
    optimization: {
        // Separate runtime code into a runtime chunk
        runtimeChunk: 'single',
        // Separate dependencies into a vendors chunk
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        overlay: true,
        stats: 'minimal',
        host: '0.0.0.0',
        disableHostCheck: true
    }
};
