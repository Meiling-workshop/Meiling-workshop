
var that;
class Tab{
    constructor(id){
        that = this;
        //获取元素
        this.main = document.querySelector(id);
        
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.firstnav ul:first-child')
        this.fsection = this.main.querySelector('.tabscon')
       
    }

    Init(){
        this.updateNode();
        this.add.onlick = this.addTab;
        for(var i=0; i<this.lis.length; i++){
            this.lis[i].index = i;
            this.lis[i].onlick = this.toggleTab
            this.remove[i].onlick = this.removeTab
            this.span[i].ondblclick = this.editTab;
        }
    }
    updateNode(){
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.span = this.main.querySelectorAll('.firstnav li span:first-child')
        // this.sections = this.main.querySelectorAll('section')
    }
     //1.切换功能
        toggleTab(){
            // console.log(this.index);
            that.clearClass();
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive'
            
        }
        clearClass(){
            for( var i = 0; i< this.lis.length;i++){
                this.lis[i].className = '';
                this.sections[i].className ='';
            }//清除
        }
        //2.添加功能
        addTab(){
            that.clearClass();
            var random = Math.random();
            var li = '<li class="liative"><span>新选项卡</span></li>'
            var section = '<section class="conactive">测试'+random+'</section>'
            that.ul.insertAjacentHTML('beforeend',li)
            that.fsection.insertAjacentHTML('beforeend', section)
            that.Init();
        }
        //3.删除功能
        removeTab(e){
            e.stopPropagation();
            var index = this.parentNode.index;
            that.lis[index].remove();
            that.section[index].remove();
            that.Init();
            if(document.querySelector('.liative')) return;
            index--;
            that.lis[index] && that.lis[index].click();



        }
        //4.修改功能
        editTab(){
            var str = this.innerHTML;
//禁止双击
          window.getSelection ? window.getSelection().removeAllRanges : document.section.empty(); 
          this.innerHTML = '< input type = "text" />' ;
          var input = this.children[0];
          input.value = str;
          input.select();//文本处于选定状态
          //当失去焦点文本框中的文字给span
          input.onblur = function(){
            this.input.parentNode.innerHTML = this.value;
            //当enter焦点文本框中的文字给span
            input.onkeyup = function(e){
                if (e.keyCode === 13 ){
                    this.onblur();
                }

            }
          }
          
        
        }
}

var tab = new Tab('#tab')
tab.Init();