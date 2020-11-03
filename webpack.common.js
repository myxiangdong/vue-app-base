let path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: './src/main.js',
	output: {
	  path: path.join(__dirname, 'dist'),
	  filename: 'bundle.js',
	  publicPath: ''
	},
	module: {
	  rules: [
		{
		  test: /\.vue$/,
		  loader: 'vue-loader'
		},
		{
		  test: /\.js$/,
		  use: {
			loader: 'babel-loader',
			options: {
			  presets: ['@babel/preset-env']
		    }
		  }
		},
		{
		  test: /\.js$/,
		  use: {
			loader: 'eslint-loader'
		  }
		},
		{
		  test: /\.css$/,
		  exclude: '/node_modules',
		  use: [
			{
			  loader: 'style-loader'
			},
			{
			  loader: 'css-loader'
			}
		  ]
		},
		{
		  test: /\.less$/,
		  use: [
			{
			  loader: 'style-loader',
			},
			{
		      loader: 'css-loader',
			},
			{
			  loader: 'less-loader',
			  options: {
				lessOptions: {
			      strictMath: true,
				},
			  },
			},
		  ],
		},
		{
		  test: /\.(png|jpe?g|gif)$/,
		  use: {
		    loader: 'file-loader',
		    options: {
		      outputPath: 'img',
		      name: '[name].[ext]',
			  esModule:false
		    }
		  }
		}
	  ]
	},
	plugins: [
	  new webpack.DefinePlugin({
	    // 值要求的是一个代码片段
	    BASE_URL: JSON.stringify('')
	  }),
	  new VueLoaderPlugin(),
	  new HtmlWebpackPlugin({
		title:'VUE APP BASE',
		template: './public/index.html'
	  })
	]
}