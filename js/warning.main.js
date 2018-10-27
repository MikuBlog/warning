
var showWarn = (function () {

    return function (obj) {

        var config = obj

        /*
            headLine:设置显示头信息
            firstLine:设置第一行内容
            secondLine:设置第二行内容
        */

        var head = document.querySelector('.manage-content-head'),

            first = document.querySelector('.manage-content-first'),

            second = document.querySelector('.manage-content-second'),

            img = document.querySelector('.manage-image')

        img.src= config.imgSrc ? config.imgSrc : "https://mikuimg.oss-cn-shenzhen.aliyuncs.com/Plugin/warning/%E6%B0%B4%E6%9E%9C.png"

        head.innerText = config.headLine ? config.headLine : "Error"

        first.innerText = config.firstLine ? config.firstLine : "You do not have administrator privileges."

        second.innerText = config.secondLine? config.secondLine : "Please get administrator privileges."


        //点击事件回调函数
        var handleClick = function (command) {

            var manager = document.querySelector('.manager')

            if (command == "block") {

                manager.style.display = "block"

            } else {

                manager.style.display = "none"

            }

        }

        //获取元素
        var element = document.querySelector(config.element),

            managerCancel = document.querySelector('.manager-cancel')

        //判断元素是否存在
        if (element) {

            element.addEventListener('click', function () {

                handleClick("block")

            })

            managerCancel.addEventListener('click', function () {

                handleClick("none")

            })

        } else {

            console.log("元素不存在,请重新配置element值")

        }

    }

})()
