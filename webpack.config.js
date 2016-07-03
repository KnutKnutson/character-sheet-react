var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        app: './src/app.js',
        vendor: ['react', 'react-dom', 'firebase']
    },
    output: {
        path:     'build',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'src')
                ],
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'src')
                ],
                loader: 'style!css'
            },
            {
                test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                loader: 'imports?define=>false&this=>window'
            }
        ]
    },
    devtool: 'source-map'
};
