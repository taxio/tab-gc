const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');

// ref: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "inline-source-map",

  entry: {
    background: `${__dirname}/src/background.ts`,
    options: `${__dirname}/src/options.tsx`
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new CopyPlugin([
      {from: "./public", to: "./"}
    ]),
    new CleanWebpackPlugin()
  ]
};
