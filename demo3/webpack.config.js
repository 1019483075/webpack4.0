let path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',  // 入口文件
  output: {
    path: path.resolve(__dirname,'dist'), // __dirname 是指webpack.config.js的绝对路径  bundle 是指出口的文件名
    filename: 'bundle.js', // 打包输出的文件夹的文件名
    publicPath: __dirname + '/dist/' // 打包后的文件夹
  },
  module: {},
  plugins: [
    new CleanWebpackPlugin() // 默认情况下，此插件将删除 webpack output.path中所有的文件，以及每次重建后所有未使用的webpack的产品。
  ]
}
