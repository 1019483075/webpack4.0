
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const merge = require('webpack-merge');
// import "@babel/polyfill";
const prodConfig  = {
  //mode: 'devlopment',
  mode: 'production', // 设置bundle.js为development的时候代码不会被压缩 设置为production的时候代码会被压缩
  devtool: 'source-map', // 一种映射关系
  devtool: 'cheap-module-eval-source-map',
  // devlopment devtool: 'cheap-module-eval-source-map'
  // devlopment devtool: 'cheap-module-source-map'
  // 插件
}
module.exports = merge(commonConfig,prodConfig)