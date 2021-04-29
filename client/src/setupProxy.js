const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api/current_user','/api/logout', '/auth/google'],
      createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
      })
    );
};