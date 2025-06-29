

function animation(obj, target,callBack) {
            // console.log(callBack);
            



            clearInterval(obj.timer) //清除以前的定时器
            obj.timer = setInterval(function () {
                var step = (target - obj.offsetLeft)/5 //步长值修改为整数,向上取整
             step =   step >0 ? Math.ceil(step) : Math.floor(step)


                if (obj.offsetLeft == target) {
                    clearInterval(obj.timer);
                    //回调函数写在定时器结束里面
                    if(callBack){
                        callBack&&callBack();

                    }
                }
                obj.style.left = obj.offsetLeft + step + 'px';//缓动是把每次位移变小
                // window.scroll(0, window.pageYOffset + step)
            
            }, 5)

        }