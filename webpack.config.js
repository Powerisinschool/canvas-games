const path = require('path');

module.exports = {
    devServer: {
        static: './dist',
    },
    entry: './src/index.js',
    mode: 'development',
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
};