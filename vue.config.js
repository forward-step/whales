const path = require('path');
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/css/global.less'),
            ]
        }
    },
    devServer: {
        host: '0.0.0.0',//target host
        port: 8080,
        hot: true,
        disableHostCheck: true,
    }
};
