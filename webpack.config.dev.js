const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env.development",
  safe: true,
});

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const { DefinePlugin } = require("webpack");

const IS_DEV = process.env.NODE_ENV === "development";
const mode = IS_DEV ? "development" : "production";

const htmlPlugin = new HtmlWebPackPlugin({
  minify: {
    collapseWhitespace: true,
  },
  template: "./public/index.html",
  filename: "./index.html",
});

const hardSourceWebpackPlugin = new HardSourceWebpackPlugin({
  cachePrune: {
    maxAge: 3 * 60 * 60 * 1000,
    sizeThreshold: 50 * 1024 * 1024,
  },
});

const definePlugin = new DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify(mode),
    BABEL_ENV: JSON.stringify(mode),
  },
});

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerPort: 8888,
  openAnalyzer: false,
});

process.traceDeprecation = true;

module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "./src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        test: /\.(png|otf|woff|woff2|eot|ttf|jpg)$/,
        loader: "file-loader",
      },
      {
        test: /\.svg?$/,
        issuer: {
          test: /\.(sa|sc|c)ss$/,
        },
        loader: "file-loader",
      },
      {
        test: /\.svg?$/,
        issuer: {
          test: /\.js?$/,
        },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    port: process.env.PORT,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    hardSourceWebpackPlugin,
    htmlPlugin,
    definePlugin,
    bundleAnalyzerPlugin,
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
    },
    noEmitOnErrors: true,
  },
};
