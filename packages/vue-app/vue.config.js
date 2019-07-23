module.exports = {
  devServer: {
    proxy: {
      '/api/*': {
        changeOrigin: true,
        target: process.env.VUE_APP_API_TARGET,
        pathRewrite: {
          '/api': '',
        },
        logLevel: 'debug',
      },
    },
  },
};
