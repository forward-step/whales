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
        public: '192.168.99.109:8080',
        hot: true,
        disableHostCheck: true,
    }
};
