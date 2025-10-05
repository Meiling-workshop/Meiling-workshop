const fs = require('fs')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>*<\/script>/

//调用
fs.readFile(path.join(__dirname, '../case/clock.html'), 'utf8', function(err,dataStr){
    if(err){
          return console.log('fail' + err.message);
    }
      console.log('success');

      //读取成功后，调用对应的三个方法，分别拆出 css,script,html

      resolveCSS(dataStr)
      resolveJS(dataStr)
      resolveHTML(dataStr)



})

//定义处理css样式的方法

function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr)
   const newCSS =  r1[0].replace('<style>', '').replace('</style>', '')
   fs.writeFile(path.join(__dirname, './case/clock.js'), newCSS, function(err){
     if(err){
          return console.log('fail' + err.message);
    }
      console.log('success');
   })
    

}

// 定义处理HTML 结构的方法
function resolveHTML(htmlStr){
    htmlStr.replace(regStyle, '<link rel = "stylesheet" href ="./index.css">').replace(regScript, '<script src ="./index.js"><>/script')
    fs.writeFile(path.join(__dirname, './case/clock.html')), newHTML, function(err){
             if(err){
          return console.log('fail' + err.message);
    }
      console.log('success');
    }
}


