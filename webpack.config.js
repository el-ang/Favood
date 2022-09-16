module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: __dirname+"/public",
        filename: "script.js",
        publicPath: "/"
    },
    target: "web",
    devServer: {
        historyApiFallback: !0,
        port: "3000",
        static: ["./public"],
        liveReload: !0,
        open: !0,
        hot: !0
    },
    resolve: {extensions: [".js", ".jsx", ".json", "ts", "tsx"]},
    module: {rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
    }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
    }]}
}