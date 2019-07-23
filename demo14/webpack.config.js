const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 将 css 单独打包成文件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩 css
/*********** sprites config ***************/
let spritesConfig = {
  spritePath: "./dist/images"
};
module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    publicPath: "/", // js 引用的路径或者 CDN 地址
    path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
    filename: "[name].bundle.js", // 代码打包后的文件名
    chunkFilename: "[name].js" // 代码拆分后的文件名
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000, // 本地服务端口
    hot: true, // 热重载
    overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于vue-cli脚手架
    proxy: {
      // 跨域代理开发
      "/comments": {
        target: "https://m.weibo.cn",
        changeOrigin: true,
        logLevel: "debug",
        headers: {
          Cookie: ""
        }
      }
    },
    historyApiFallback: {
      // HTML5 history模式
      rewrites: [{ from: /.*/, to: "/index.html" }]
    }
  },
  resolve: {
    alias: {
      jQuery$: path.resolve(__dirname, "src/vendor/jquery.min.js")
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/, // 针对.css后缀文件设置loader
        // use: ["style-loader", "css-loader"]
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          //"postcss-loader", // 使用 postcss 为 css 加上浏览器前缀
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("postcss-sprites")(spritesConfig)]
            }
          },
          "sass-loader" // 使用 sass-loader 将 scss 转为 css
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              outputPath: "images/", //输出到 images 文件夹
              limit: 10000 //把小于 20kb 的文件转成 Base64 的格式
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              // 压缩 jpg/jpeg 图片
              mozjpeg: {
                progressive: true,
                quality: 65 // 压缩率
              },
              // 压缩 png 图片
              pngquant: {
                quality: "65-90",
                speed: 4
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热部署模块
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "自动生成HTML", // 打包输出HTMl
      minify: {
        removeComments: true, // 一出HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true // 压缩内联css
      },
      filename: "index.html", // 生成后的文件名
      template: "index.html", // 根据此模板生成HTML文件
      chunks: ["app"]
    }),
    new MiniCssExtractPlugin({
      // 从js里面吧css提取成一个css文件，插入到html中
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery", // npm
      jQuery: "jQuery" // 本地Js文件
    })
  ]
};
