let path = require('path');
module.exports = {
  entry: './src/index.js',  // 入口文件
  output: {
    path: path.resolve(__dirname,'build'), // __dirname 是指webpack.config.js的绝对路径  bundle 是指出口的文件名
    filename: 'bundle.js', // 打包输出的文件夹的文件名
    publicPath: 'build' // 打包后的文件夹
  },
  module: {},
  plugins: []
}