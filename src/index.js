
window.addEventListener('load', function(){
   //获取元素
   
   
   var focus = document.querySelector('.focus')
   var ul = focus.children[0]
   var w = focus.offsetWidth;
   var index = 0;
   //定时器自动轮播图片
   var timer = this.setInterval(function(){
    console.log(index);

    index ++;
    ul.style.transition = 'all .3s'
     var translateX = - index * w;
    ul.style.transform = 'translateX(' + translateX + 'px)';
   



   },2000)
   //过渡完成事件之后，再去判断 监听过渡完车
   ul.addEventListener('transitionend', function(){
    if(index == 3){
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

   })
})
