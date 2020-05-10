const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "inline-source-map",
  entry: {
    background: `${__dirname}/src/background.ts`
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new CopyPlugin([
      {from: "./public", to: "./"}
    ]),
    new CleanWebpackPlugin()
  ]
};
