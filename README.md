# 自制警告提示框插件

<br/>

## 效果图

<img src="https://mikuimg.oss-cn-shenzhen.aliyuncs.com/Plugin/warning/%E6%95%88%E6%9E%9C%E5%9B%BE2.png"> 

<br/>

## 简介

<br/>

>随手自制自制的一个简易的警告提示框

>入口js为```warning.main.min.css```，入口css为```warning.style.min.css```

<br/>

## 更新

<br/>

- 1.0.0 - 『简易提示框插件』
- 1.0.1 - 『重规划API用法』
- 1.0.2 - 『简单自适应小屏幕』

<br/>

<br/>

## 使用

<br/>

>为了适配移动端，请在头部加上如下语句

<br/>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

<br/>

>头部引入文件

<br/>

```
<link href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" media="screen" href="css/warning.style.min.css" />
<script src="js/warning.main.min.js"></script>
```

<br/>

>在body内引入这段html代码(body作为引入html代码的父元素)

<br/>

```html
<div class="manager">
    <div class="manager-box">
        <div class="manager-color">
            <img class="manage-image">
        </div>
        <div class="manager-content">
            <span class="manage-content-head"></span>
            <div class="manage-content-first"></div>
	    <div class="manage-content-second"></div>
        </div>
        <div class="manager-cancel">
            <i class="fa fa-location-arrow fa-2x"></i>
        </div>
    </div>
</div>
```

<br/>

>body后引入script加入如下代码

<br/>

```js

showWarn({

    //图片的路径(可选 不填默认为蓝苹果)
    imgSrc:"https://mikuimg.oss-cn-shenzhen.aliyuncs.com/Plugin/warning/%E6%B0%B4%E6%9E%9C.png",

    //大标题(可选 不填默认为"Error!")
    headLine:"Error!",

    //第一行文字(可选 不填默认为"You do not have administrator privileges.")
    firstLine:"You do not have administrator privileges.",

    //第二行文字(可选 不填默认为"Please get administrator privileges.")
    secondLine:"Please get administrator privileges.",

    //触发点击事件元素(CSS选择器 必填)
    element:"button"

})

```

<br/>

## vue使用

<br/>

>在```warning.main.min.js```末尾添加```export default showWarn;```

>在所需组件内引入```import showWarn from "./xxx/warning.main.min.js```

>在main.js引入```import './xxx/warning.style.min.css'```

<br/>

## 兼容性

<br/>

>兼容IE10以上浏览器

<br/>

## 下载

<br/>

>git clone https://github.com/MikuBlog/warning.git



