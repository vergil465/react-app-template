const HtmlWebPackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  minify: {
    collapseWhitespace: true,
  },
  template: './public/index.html',
  filename: './index.html',
});

const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    BABEL_ENV: JSON.stringify('production'),
  },
});

const optimizeCSSAssetsPlugin = new OptimizeCSSAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessorPluginOptions: {
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  },
  canPrint: true,
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
});

const terserPlugin = new TerserPlugin({
  parallel: true,
  sourceMap: false,
  terserOptions: {
    mangle: true,
    toplevel: false,
    ie8: true,
    keep_fnames: false,
    output: {
      comments: false,
    },
  },
});

module.exports = {
  entry: [
    '@babel/polyfill',
    path.join(__dirname, './src/index.js'),
    'svgxuse',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pro.[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            modules: false,
            minSize: true,
          },
        },
        {
          loader: 'sass-loader',
        },
        ],
      },
    ],
  },
  stats: {
    children: false,
  },
  plugins: [
    definePlugin,
    htmlPlugin,
    miniCssExtractPlugin,
  ],
  optimization: {
    usedExports: true,
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      minSize: 30000,
    },
    minimize: true,
    minimizer: [
      terserPlugin,
      optimizeCSSAssetsPlugin,
    ],
  },
};
