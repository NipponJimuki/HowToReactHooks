const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const MODE = process.env.NODE_ENV || 'development';
const PRODUCTION = MODE === 'production';

module.exports = {
    mode: MODE,
    devtool: PRODUCTION ? 'hidden-source-map' : 'source-map',
    entry: ['./src/App.tsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        chunkFilename: '[name].js',
        publicPath: '/build/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: true,
            eslint: true,
            watch: './src/App.tsx',
            tsconfig: './tsconfig.json',
        }),
    ],
    devServer: {
        open: true,
        port: 3334,
        publicPath: '/build/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /react|react-dom/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true,
                },
            },
        },
    },
    performance: { hints: false },
};
