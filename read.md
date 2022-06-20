1.初始化 npm init -y
创建根目录各类文件夹
noscript 标签用于当浏览器不支持 JS 的时候在页面上显示一些提示内容，但是也有一些缺点，比如如果是防火墙而不是浏览器禁用了 JS，非但 JS 执行不了，noscript 的内容也不会显示。
比较好的办法是使用 noscript 作为默认方法，同时提供一个 fallback 方法，即页面上提供一个 display: block; 的 div 提示，随后使用 JS 将其设置为 display: none;
安装脚手架 webpack yarn add webpack webpack-cli -D
安装插件 yarn add html-webpack-plugin -D
打包自动清理上一次的文件 clean-webpack-plugin
css 相关处理器 yarn add style-loader css-loader less less-loader -D
自动添加前缀 yarn add postcss-loader autoprefixer -D
css 打包后成为单独文件 yarn add mini-css-extract-plugin -D
打包之后压缩 css yarn add css-minimizer-webpack-plugin -D
合并配置 yarn add webpack-merge -D
babel 相关 yarn add @babel/preset -env @babel/preset-react @babel/core @babel/polyfill babel-loader -D
