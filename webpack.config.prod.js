const HtmlWebPackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const path = require('path');

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
          options: { presets: ['@babel/preset-env'] },
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: 'style-loader',
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
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      minSize: 30000,
    },
  },
};
