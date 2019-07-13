module.exports = {
  devServer: {
    proxy: {
      '/api/*': {
        changeOrigin: true,
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': '',
        },
        logLevel: 'debug',
      },
    },
  },
};
