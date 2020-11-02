# vue-app-base

1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构
2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）
3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务
4. 尽可能的使用上所有你了解到的功能和特性

# /** 项目开发过程说明文档 **/
1. 安装 webpack 和 webpack-cli
公共打包配置
2. 处理js 文件 安装 babel-loader @babel/core @babel/preset-env
3、处理 vue 文件需要安装 vue-loader 依赖 css-loader vue-template-compiler 同时需要使用 VueLoaderPlugin
4、处理 less 文件需要安装 less less-loader style-loader
5、处理 img 图片 file-loader 图片不显示问题 -- file-loader在新版本中esModule默认为true，因此手动设置为false
6、运行打包是报错 Error: Cannot find module '@vue/cli-plugin-babel' 将babel.config.js 内容注销 
7、运行打包报错 Cannot find module file-loader 安装 file-loader 模块
8、处理HTML打包 html-webpack-plugin 配置全局变量 BASE_URL new 利用 webpack[ 'ProvidePlugin' ]
生产环境配置
9、利用 webpack-merge 合并公共的配置
10、增加删除的优化动作 clean-webpack-plugin
11、拷贝项目中的 public 中的文件
开发环境配置
12、利用 webpack-merge 合并公共的配置
13、利用 webpack-dev-server 开启一个开发服务器
14、解决报错Cannot find module 'webpack-cli/bin/config-yargs' 
	安装 "webpack": "^4.41.2", "webpack-cli": "^3.3.9", "webpack-dev-server": "^3.9.0"
