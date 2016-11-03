var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/sys-gather/entry.js",
    output: {
        path: './static',
        publicPath: '/static/',
        filename: 'gather.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(scss|css)$/,
                loaders: ["style", "css", "sass"]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                query: {
                    // since babel 6 needs preset to determin what to transform
                    presets: ['es2015']
                }
            },
            // { 
            //     test: /bootstrap.+\.(jsx|js)$/,
            //     loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            // }
        ]
    },

    resolve: {
        root: [path.resolve(__dirname, "./src")],
        alias: {
            echarts: "libs/echarts",
            datetimepicker: "libs/datetimepicker/bootstrap-datetimepicker",
            bootstrap: "libs/bootstrap/js/bootstrap"
        }
    },

    plugins: [
        // some common package from dll.config.js
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
        // expose jquery to all module
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};


if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = module.exports.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
} else {
    module.exports.devtool = '#source-map'
}