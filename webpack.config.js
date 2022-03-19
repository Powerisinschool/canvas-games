const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        static: './dist',
    },
    entry: './src/index.js',
    output: {
        filename: 'gamma.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: './index.html'
        })
   ]
};