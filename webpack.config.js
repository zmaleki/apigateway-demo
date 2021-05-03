const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        "TimeFunction": "./src/timefunction/index.ts",
        
    },
    output: {
        filename: "src/[name]/index.js",
        path: __dirname + "/.dist/",
        libraryTarget: "commonjs2",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"],
    },
    target: "node",
    mode: process.env.NODE_ENV || "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                },
            }),
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "*.yaml" }],
        }),
    ],
};
