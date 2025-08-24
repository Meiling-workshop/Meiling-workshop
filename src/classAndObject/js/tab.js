
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
        }
    }
    updateNode(){
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
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
        removeTab(){
            e.stopPropagation();
            var index = this.parentNode.index;



        }
        //4.修改功能
        editTab(){}
}

var tab = new Tab('#tab')
tab.Init();