const webpack = require('webpack');
const merge = require('webpack-merge');
// import "@babel/polyfill";
const commonConfig = require('./webpack.common.js');
const devConfig = {
  mode: 'development',
  //mode: 'production', // 设置bundle.js为development的时候代码不会被压缩 设置为production的时候代码会被压缩
  devtool: 'source-map', // 一种映射关系
  devtool: 'cheap-module-eval-source-map',
  // devlopment devtool: 'cheap-module-eval-source-map'
  // devlopment devtool: 'cheap-module-source-map'
  // server
  devServer:{
    contentBase: './dist',
    open: true ,//启动命令的时候自动打开浏览器
    proxy: { // 转发 代理
      "/api": "http://localhost:3000"
    },
    port: 8080,
    hot: true,
   // hotOnly: true // 即使游览器的功能没有生效也不会去刷新页面
  },
  // 插件
  plugins : [
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html' ,// dist下生成的html是以template这个目录下的文件为模板
    // }), 
    // new CleanWebpackPlugin(['dist']),// CleanWebpackPlugin是指代码在打包之前删除dist下面的文件
    new webpack.HotModuleReplacementPlugin()
]
}
module.exports = merge(commonConfig,devConfig)