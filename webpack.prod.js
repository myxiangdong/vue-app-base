const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
	  patterns: [
		{ from: 'public', to: path.resolve(__dirname, 'dist')}
	  ],
	}),
  ]
})