const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 将 css 单独打包成文件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩 css
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    publicPath: "./", // js 引用的路径或者 CDN 地址
    path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
    filename: "[name].bundle.js", // 代码打包后的文件名
    chunkFilename: "[name].js" // 代码拆分后的文件名
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
          "postcss-loader", // 使用 postcss 为 css 加上浏览器前缀
          // {
          //   loader: "postcss-loader",
          //   // 使用 postcss 为 css 加上浏览器前缀
          //   options: {
          //     plugins: [require("autoprefixer")]
          //   }
          // },
          "sass-loader" // 使用 sass-loader 将 scss 转为 css
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "处理CSS文件", // 打包输出HTMl
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
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"), //用于优化\最小化 CSS 的 CSS处理器，默认为 cssnano
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给 cssProcessor 的选项，默认为{}
      canPrint: true //布尔值，指示插件是否可以将消息打印到控制台，默认为 true
    })
  ]
};
