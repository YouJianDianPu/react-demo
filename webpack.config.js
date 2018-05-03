/*
* @Author: YouJDP
* @Date:   2018-04-13 14:15:59
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-05-02 23:18:50
*/

var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
	entry: [
        //加什么空格呢？？？？？几天的issue就是个空格！！！！！！
        'webpack-dev-server/client?http://localhost:8888',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, '/app/index.js')
    ],
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: '[name].js',
        publicPath: '/'
	},
    plugins: [
        new HtmlWebpackPlugin({
            //根据下面这个index.tpl.html模板打包自动创建index.html页面
            template: './index.tpl.html',
            //注入选项，有true, body, head, false四个选项，true及body表示script插入到body底部，其他同理
            inject: 'body',
            filename: './index.html',
            hash: true
        }),
        //是为组件和模块分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID，通过分析ID，可以建议降低总文件的大小
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        new webpack.NoErrorsPlugin(),
        //可以理解为，通过配置了DefinePlugin，那么这里面的标识就相当于全局变量，你的业务代码可以直接使用配置的标识
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:{
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /.\less/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    }
};

