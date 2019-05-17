require("@babel/polyfill");
const path = require("path");

const mode = (process.env.NODE_ENV === "production") ? "production" : "development";

module.exports = {
    mode: mode,
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
    devServer: {
        open: false,
        port: '5000',
        host: '0.0.0.0',
        historyApiFallback: true
    }
}
