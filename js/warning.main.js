
//使用即执行函数，防止变量污染

(function () {

    /*
        点击事件回调函数
        headLine:设置显示头信息
        firstLine:设置第一行内容
        secondLine:设置第二行内容
    */
    var head = document.querySelector('.manage-content-head'),

        first = document.querySelector('.manage-content-first'),

        second = document.querySelector('.manage-content-second'),

        img = document.querySelector('.manage-image')

    if (config.imgSrc != "")

        img.src = config.imgSrc

    if (config.headLine != "")

        head.innerText = config.headLine

    if (config.firstLine != "")

        first.innerText = config.firstLine

    if (config.secondLine != "")

        second.innerText = config.secondLine


    //点击事件回调函数
    var handleClick = function(command) {

        var manager = document.querySelector('.manager')

        if (command == "block") {

            manager.style.display = "block"

        } else {

            manager.style.display = "none"

        }

    }

    //接收一个元素,如果元素不存在则会报错

    try {

        var element = document.querySelector(config.element),

            managerCancel = document.querySelector('.manager-cancel')

        //继续判断元素是否存在
        if (element) {

            element.addEventListener('click', function() {

                handleClick("block")

            })

            managerCancel.addEventListener('click', function() {

                handleClick("none")

            })

        }

    } catch (e) {

        console.log("元素不存在")

    }

})()
