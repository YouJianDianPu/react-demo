/*
* @Author: YouJDP
* @Date:   2018-04-13 14:15:59
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-05-01 18:16:58
*/

var config = {
	entry: './app/index.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
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

module.exports = config;