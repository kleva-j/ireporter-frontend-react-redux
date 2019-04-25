const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|woff|woff2|eot|ttf|svg)$/i,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};


// const path = require('path');
// const autoprefixer = require('autoprefixer');
// const Imagemin = require('imagemin-webpack');
// const imageminSvgo = require('imagemin-svgo');
// const imageminPngQuant = require('imagemin-pngquant');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const postCSSLoader = {
//   loader: 'postcss-loader',
//   options: {
//     sourceMap: true,
//     plugins() {
//       return [
//         autoprefixer({
//           browsers: ['last 3 versions', 'IE > 8'],
//         }),
//       ];
//     },
//   },
// };

// const imageminOptions = {
//   plugins: [
//     imageminPngQuant(),
//     imageminSvgo(),
//   ],
// };

// module.exports = {
//   entry: './src/js/index.js',
//   output: {
//     path: path.resolve(__dirname, 'public', 'dist'),
//     filename: 'js/index.js',
//     publicPath: '/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//             options: { minimize: true },
//           },
//         ],
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           { loader: 'css-loader', options: { url: false, sourceMap: true } },
//           postCSSLoader,
//           { loader: 'sass-loader', options: { sourceMap: true } },
//         ],
//       },
//       {
//         test: /\.(png|jp(e*)g|svg)$/,
//         loader: 'file-loader?name=images/[name].[ext]',
//       },
//     ],
//   },
//   devServer: {
//     historyApiFallback: true,
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: './css/[name].css',
//     }),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: path.join(__dirname, 'src', 'index.html'),
//     }),
//     new Imagemin({ imageminOptions }),
//   ],
// };
