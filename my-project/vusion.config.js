const path = require('path');
module.exports = {
    type: 'app',
    webpack: {
        entry: {
            bundle: './src/index.js',
        },
        output: {
        	publicPath: '/public/',
        },
        module: {
			EXTENDS: true,
			rules: [
	            {
	                test: /\.js$/,
	                exclude: /node_modules(.+)(?!\.vue\/index\.js$)/,
	                loader: 'babel-loader',
	                enforce: 'pre',
	            },
	            'EXTENDS',
			],
			loaders: [
		    	{
		        	test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
		        	loader: 'file-loader'
		    	},
		    	{
			        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
			        loader: 'file-loader',
			        query: {
			          name: '[name].[ext]?[hash]'
			        }
		    	}
			]
		}
    },
    webpackDevServer:{
    	contentBase: __dirname,
    	publicPath: "/public/",
    	port:1638
    }
}
