module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
};
