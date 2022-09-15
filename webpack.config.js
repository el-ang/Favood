module.exports = module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {path: __dirname+"/public", filename: "script.js"},
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        liveReload: true,
        open: true,
        hot: true
    },
    resolve: {extensions: [".js", ".jsx", ".json"]},
    module: {rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
    }]},
}