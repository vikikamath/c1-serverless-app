module.exports = {
  publicPath: '/app/',
  devServer: {
    proxy: {
      '/api/**': {
        changeOrigin: true,
        target: 'http://localhost:3000',
        rewrite: (req) => {
          req.url.replace(/^\/api/, '');
        },
        logLevel: 'debug',
      },
    },
  },
};
