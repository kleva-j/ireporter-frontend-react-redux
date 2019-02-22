const path = require('path');
const autoprefixer = require('autoprefixer');
const Imagemin = require('imagemin-webpack');
const imageminSvgo = require('imagemin-svgo');
const imageminPngQuant = require('imagemin-pngquant');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins() {
      return [
        autoprefixer({
          browsers: ['last 3 versions'],
        }),
      ];
    },
  },
};

const imageminOptions = {
  plugins: [
    imageminPngQuant(),
    imageminSvgo(),
  ],
};

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'js/index.js',
    publicPath: '/public/',
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          postCSSLoader,
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new Imagemin({ imageminOptions }),
  ],
};
