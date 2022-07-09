const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/script.ts"),
  },
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [new BundleAnalyzerPlugin(), new MiniCssExtractPlugin()],
};
