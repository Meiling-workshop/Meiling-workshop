
window.addEventListener('load', function(){
   //获取元素
   
   
   var focus = document.querySelector('.focus')
   var ul = focus.children[0]
   var w = focus.offsetWidth;
   var index = 0;
   var ol = focus.children[1];
   //定时器自动轮播图片
   var timer = this.setInterval(function(){
    // console.log(index);

    index ++;
    ul.style.transition = 'all .3s'
     var translateX = - index * w;
    ul.style.transform = 'translateX(' + translateX + 'px)';
   



   },2000)
   //过渡完成事件之后，再去判断 监听过渡完车
   ul.addEventListener('transitionend', function(){
    if(index >= 3){
        index = 0;
        // console.log(index);
        ul.style.transition = 'none' //去掉过渡效果，跳到目标位置，利用最新的索引乘以宽度
        var translateX = - index * w;
        ul.style.transform = 'translateX(' + translateX + 'px)';
        //如果索引号小于0，直接跳到索引号为2；
   
        
    }else if(index < 0){
        index = 2;
        ul.style.transition = 'none' //去掉过渡效果，跳到目标位置，利用最新的索引乘以宽度
        var translateX = - index * w;
        ul.style.transform = 'translateX(' + translateX + 'px)';
    }
    ol.querySelector('li.current').classList.remove('current');
    ol.children[index].classList.add('current');

   })

   //获取手指初始坐标

   var startX = 0;
   var moveX = 0;
   var flag = false;
   ul.addEventListener('touchstart', function(e){
     startX = e.targetTouches[0].pageX;
     //手指触摸的时候就停止定时器
     clearInterval(timer);
   });

   ul.addEventListener('touchmove', function(e){
     moveX = e.targetTouches[0].pageX - startX;

     var translateX = -index * w + moveX 
     ul.style.transition = 'none';
      ul.style.transform = 'translateX(' + translateX + 'px)';
      flag = true;
      e.preventDefault();//阻止滚动屏幕的行为

   });

   // 如果移动像素少于50px就回弹到原来的位置；如果移动距离大于50px就上一张到下一张滑动

    ul.addEventListener('touchend', function(e){
        if(flag){
             if(Math.abs(moveX) > 50){
        // 如果右滑就是播放上一张，moveX是正值
        // 如果左滑就是播放上一张，moveX是负值
        if(moveX > 0){
            index --;
        }else{
            index ++;
        }
        var translateX = -index * w;
        ul.style.transition = 'all .3s';
      ul.style.transform = 'translateX(' + translateX + 'px)';
     } else{
        var translateX = -index * w;
         ul.style.transition = 'all .3s';
      ul.style.transform = 'translateX(' + translateX + 'px)';

     }
            
        }


    
 
   });

   ul.addEventListener('touchmove', function(e){
     moveX = e.targetTouches[0].pageX - startX;

     var translateX = -index * w + moveX 
     ul.style.transition = 'none';
     ul.style.transform = 'translateX(' + translateX + 'px)';
     // 手指离开的时候就重新开启定时器
     clearInterval(timer);//只有一个定时器在运行
     timer = setInterval(function(){
    // console.log(index);

    index ++;
    ul.style.transition = 'all .3s'
     var translateX = - index * w;
    ul.style.transform = 'translateX(' + translateX + 'px)';
   



   },2000)


   });





})
//小圆点跟随变化 把ol里面li带有current 类名的选出来去掉类名，在当前索引号加上current
//等着过渡结束之后变化，写到transitionend事件里面。
//手指滑动轮播图 手指拖动ul; 
//手指滑动轮播图：本质就ul跟随手指移动，触摸元素touchstart 获取手指初始坐标，touchmove计算手指的滑动距离，并移动盒子


