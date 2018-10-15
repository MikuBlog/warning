# 自制警告提示框插件

<br/>

## 效果图

<img src="https://mikuimg.oss-cn-shenzhen.aliyuncs.com/githubPicture/%E6%95%88%E6%9E%9C%E5%9B%BE2.png"> 

<br/>

## 简介

<br/>

>随手自制自制的一个简易的警告提示框

>入口js为```warning.main.min.css```，入口css为```warning.style.min.css```

<br/>

## 使用

<br/>

>头部引入css文件

<br/>

```
<head>
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" media="screen" href="css/warning.style.min.css" />
</head>
```

<br/>

>在body内引入这段html代码

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

>在body后引入js文件，两者顺序不可调换

<br/>

```
<body>
</body>
<script src="js/warning.config.js"></script>
<script src="js/warning.main.min.js"></script>
```

<br/>

## 配置文件

<br/>

>配置文件为```warning.config.js```

<br/>

```
//配置提示框信息
var config = {

    //图片的路径
    imgSrc:"https://mikuimg.oss-cn-shenzhen.aliyuncs.com/Plugin/%E6%B0%B4%E6%9E%9C.png",

    //大标题
    headLine:"Error!",

    //第一行文字
    firstLine:"You do not have administrator privileges.",

    //第二行文字
    secondLine:"Please get administrator privileges.",

    //触发点击事件元素(选择器)
    element:"button"

}
```

<br/>

## 下载

<br/>

>git clone https://github.com/MikuBlog/warning.git



