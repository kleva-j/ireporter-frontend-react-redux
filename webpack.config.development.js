module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${__dirname}/dist`,
    historyApiFallback: true,
    port: 6300,
    hot: true,
  },
};
