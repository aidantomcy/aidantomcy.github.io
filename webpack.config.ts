import { resolve } from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import * as TerserPlugin from "terser-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const config = {
  mode: "development",
  entry: {
    bundle: resolve(__dirname, "src/script.ts"),
  },
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
        ],
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
} as const;

export default config;
