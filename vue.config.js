module.exports = {
    devServer: {
        host: 'localhost',
        port: 3031,
        open: true,
        proxy: {
            '/api': {
                target: `http://localhost:3030/`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/',
                },
            },
        },
        disableHostCheck: true
    },
};
