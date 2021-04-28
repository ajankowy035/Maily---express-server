const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/current_user',
        createProxyMiddleware({
          target: 'http://localhost:3001',
          changeOrigin: true,
        })
      );
      
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );

  
};