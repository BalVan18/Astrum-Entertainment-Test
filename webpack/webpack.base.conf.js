const webpack = require('webpack');
const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {main: './src/js/app.js'},
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'js/app.js?[hash]',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {

                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                ],
            },
            {
                test:/\.twig$/,
                use: [
                    'raw-loader',
                    {
                        loader: 'twig-html-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                include: [path.resolve('./src/assets/img/icons-svg')],
                use: [
                    {
                        loader: 'svg-sprite-loader', options: {
                            spriteFilename: '/assets/img/sprite.svg',
                            extract: true,
                            publicPath: '/'
                        }
                    },
                    'svg-transform-loader',
                    'svgo-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/[name].css?[hash]"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `./src/assets/img`, to: `./assets/img` },
                { from: `./src/assets/fonts`, to: `./assets/fonts` },
                { from: `./src/static`, to: `./` },
            ],
        }),
        new SpriteLoaderPlugin({
            plainSprite: true
        }),
    ]
};