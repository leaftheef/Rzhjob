const path = require("path")
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
//配置出入口文件
module.exports = {
    entry: "./src/index.js", // 入口
    output: {
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "main.js" // 出口文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
            filename: 'index.html' // 生成文件的名称
        })
    ]
}