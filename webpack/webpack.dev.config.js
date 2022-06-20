const { merge } = require("webpack-merge");

const { resolvePath, baseConfig } = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "127.0.0.1",
    port: 0913,
    hot: true, //热更新
    open: true, //打开浏览器
  },
});
