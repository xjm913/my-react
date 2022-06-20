const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolvePath = (_path) => path.resolve(__dirname, _path);
//将相对路劲转换为绝对路径

const baseConfig = {
  entry: resolvePath("../src/index.jsx"), //入口
  output: {
    //输出
    path: resolvePath("../dist"),
    filename: "[name].lbundle.js",
  },
  module: {
    rules: [
      //检测.css和.less文件
      //MiniCssExtractPlugin会与style-loader冲突 替换掉
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.jsx$/,
        use: "babel-loader",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //插件配置
      template: resolvePath("../public/index.html"),
      filename: "index.html",
      title: "my react app",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = {
  resolvePath,
  baseConfig,
};
