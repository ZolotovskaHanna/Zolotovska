const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, 'src/index.js'),
            path.resolve(__dirname, 'src/main.css'),
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
   module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        watchContentBase: true,
    },
};