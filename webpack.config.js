var path = require('path');
module.exports = {
    entry: "./entry.js",
    output: {
        path: './static',
        publicPath: '/static/',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                query: {
                    // since babel 6 needs preset to determin what to transform
                    presets: ['es2015']
                }
            }
        ]
    },

    devtool: '#source-map'
};