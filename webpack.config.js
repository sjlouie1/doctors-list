module.exports = {
  entry: {
    app: ["./index.js"]
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
};
