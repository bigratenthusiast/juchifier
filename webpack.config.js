const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = (env) => {
    return {
        mode: env.mode,
        entry: {
            index: './src/scripts/index.ts',
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: {
                        loader: 'ts-loader'
                    },
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "src"),
                        to: path.resolve(__dirname, "dist"),
                        globOptions: {
                            ignore: [
                                '**/scripts/**'
                            ]
                        }
                    },
                ]
            })
        ],
    };
};
