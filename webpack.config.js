/**
 * @file webpack config
 * @author xishengbo<xishengbo@baidu.com>
 */

var webpack = require('webpack');
var path = require('path');


var HtmlWebpackPlugin = require('html-webpack-plugin');
var APP_PATH = path.resolve(__dirname, 'app');
var BUILD_PATH = path.resolve(__dirname, 'build');


var plugins = [
    // new HtmlWebpackPlugin({
    //     title: 'test',
    //     template: './app/default.tpl',
    //     filename: 'build/default.html',
    //     inject: 'body',
    //     chunks: ['imgs']
    // }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    })
];

if (process.argv.indexOf('-p') > -1) {
    // 编译成生产版本
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
}

module.exports = {
    devServer: {
        // 开发机需要指定host，0.0.0.0即绑定所有hosts
        host: '0.0.0.0',
        port: 8181,
        inline: true,
        progress: true,
        stats: {
            colors: true
        }
    },
    entry: {
        ecommerce: APP_PATH + '/ecommerce',
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
        // filename: '[name].[chunkhash:5].js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            include: APP_PATH,
            loader: 'babel-loader'
        }, {
            test: /\.html/,
            loader: 'raw-loader'
        }, {
            test: /\.less/,
            include: APP_PATH + '/entry',
            loader: 'raw-loader!less-loader'
        }, {
            test: /\.less/,
            include: APP_PATH,
            loader: 'style-loader!css-loader!less-loader'
        },{ 
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }]
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    plugins: plugins,
    resolve: {
        // 后缀名自动补全
        extensions: ['.js', '.jsx']
    }
};
