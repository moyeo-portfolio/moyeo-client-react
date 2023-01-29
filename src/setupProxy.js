const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/moyeo',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            pathRewrite: {
                '^/api': '',
            },
        }),
    );
};