const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  target: "node",
  externals: [nodeExternals()],

  plugins: [new HtmlWebPackPlugin({ template: "./src/index.html" })],
};
