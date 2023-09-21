const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: {
                    delete: ["./public/assets/img/icons-svg"]
                }
            }
        }),
        new CleanWebpackPlugin({}),
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
});