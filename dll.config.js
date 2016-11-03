const webpack = require('webpack');

const vendors = [
    "vue",
    "jquery",
    "vue-router",
    "hdp-vue-components",
    "vue-i18n",
    "moment",
    "./src/libs/bootstrap/js/bootstrap",
    "./src/libs/echarts",
    "./src/libs/datetimepicker/bootstrap-datetimepicker.js",
];

module.exports = {
    output: {
        path: 'static',
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
        // bootstrap depends on jquery
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["css"] 
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
};