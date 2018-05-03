/*
* @Author: YouJDP
* @Date:   2018-05-01 21:31:00
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-05-01 22:51:33
*/

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	quiet: false,
	noInfo: false,
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		timings: false,
		chunks: false,
		chunksModules: false
	}
}).listen(8888, 'localhost', function(err){
	if(err){
		console.log(err);
	}
	console.log('Listening at localhost:8888');
})