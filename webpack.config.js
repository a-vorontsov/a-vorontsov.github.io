require("@babel/polyfill");
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        main: ["@babel/polyfill","./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader'
             }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin()],
    },
}
