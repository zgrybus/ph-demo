const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
    publicPath: '/ph-demo'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;