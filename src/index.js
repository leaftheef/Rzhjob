// // 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')
//引入文件
import "./tabs.js"
import "./banner.js"
//引入jquery
import $ from "jquery"
$("#swiper").css("background", "red")
//引入css样式
import "./styles/index.css"
//引入less样式
// import "./styles/index.less"
//引入图片
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

//引入字体图标
import "./assets/fonts/iconfont.css"

// 处理高版本js
class App {
    static qqqqqq = 123
}
console.log(App.qqqqqq)