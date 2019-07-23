var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  // 入口文件
  entry: {
    lodash: './src/lodash.js',
    main: './src/index.js' ,
    sub: './src/index.js' 
  }, 
   // loader
   module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader', // 通过file-loader我们可以知道它可以对图片格式打包进行处理
          options: {
            //placeholder 占位符
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048  // 图片小于2048的时候编译为base64 大于2048就打包到images目录下
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {         
            loader: 'css-loader',
            options: {
              importLoaders: 2 // 是指在.scss这样的文件执行之前去执行2个操作  分别是postcss-loader scss-loader
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader', // 通过file-loader我们可以知道它可以对图片格式打包进行处理
        }
      },
      { test: /\.js$/, 
        exclude: /node_modules/,
        loader: "babel-loader" ,
        // options:{
        //   "presets": [["@babel/preset-env",
        //   {
        //     useBuiltIns:'usage' // 没有使用的es6就不会去编译
        //   }]],

        // }
      }
  ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: 'src/index.html' ,// dist下生成的html是以template这个目录下的文件为模板
    }), 
    new CleanWebpackPlugin(),// CleanWebpackPlugin是指代码在打包之前删除dist下面的文件
    // new CleanWebpackPlugin(['dist'],{
    //   root: path.resolve(__dirname,'../')
    // })
  ],
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  // 出口
  output: {
    publicPath: '/',
    // publicPath: 'http://cdn.com.cn',
    filename: '[name].js' , // 出口生成文件名
    path: path.resolve(__dirname,'../dist') // __dirname 是指webpack.config.js的绝对路径  bundle 是指出口的文件名

  }
}