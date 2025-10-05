//导入fs模块，来操作
// const { log } = require('console');
// const fs = require('fs')
// //调用fs.readFile()方法读取文件 参数1 文件路径 参数2 ：读取文件编码格式 参数3 回调函数
// // 读取失败、成功的结果
// fs.readFile('/Users/luanmeiling/Documents/projects/pratique/src/node/day\ 1/code/1.text', 'utf-8', function(err,dataStr){

// if(err){
//     return log('读取文件失败' + err.message)
// }
// console.log('读取文件成功' + dataStr);
// })



//向指定文件中写入内容 fs.writeFile()
// const fs = require('fs')
// fs.writeFile('/Users/luanmeiling/Documents/projects/pratique/src/node/day\ 1/code/2.text', 'Hello World', function(err){
    
//     //如果文件写入成功 则err为null 如果文件写入失败 则err为错误对象
//     if(err){
//         return console.log('fail' + err.message)
        
//     }
//     console.log('success');
    
// })

// const fs = require('fs')
// fs.readFile('/Users/luanmeiling/Documents/projects/pratique/src/node/day\ 1/code/成绩.text' , 'utf8', function(err,dataStr){
//     if(err){
//         return console.log('fail' + err.message);
        
//     }
//     console.log('success' + dataStr);
//     //成绩数据 用空格分隔；循环数组，每一项数据字符串替换操作
//     const arrOld = dataStr.split(' ')
//     // console.log(arrOld);
//     const arrNew = []
//     arrOld.forEach(item =>{
//         arrNew.push(item.replace('=' , ':'))

//     })
//     console.log(arrNew);
//    const newStr = arrNew.join('\r\n')
//    console.log(newStr);
//    //调用fs.writeFile()写入新的文件
//    fs.writeFile('/Users/luanmeiling/Documents/projects/pratique/src/node/day\ 1/code/成绩整理后.text',newStr, function(err){
//     if(err){
//         return console.log('fail' +err.message);
        
//     }
//     console.log('success');
    
//    })    
// })

//fs模块：路径动态拼接
// const fs = require('fs')
// fs.readFile(__dirname + '/1.text', 'utf8', function(err, dataStr){
//     if(err){
//         return console.log('fail' + err.message);
//     }
//     console.log('success');
// })
//__dirname 表示当前文件所处的目录
// console.log(__dirname);


//path.join() 将路径拼接完整,不要使用+
//path.basename()将文件从路径中解析出来

// const path = require('path')
// const fs = require('fs')
// const pathStr = path.join('/a', '/b/c' , '../', './d', 'e') //../会抵消前面的路径
// fs.readFile(path.join(__dirname,'/1.text'),'utf8', function(err, dataStr){
//     if(err){
//          return console.log('fail' + err.message);
//     }
//      console.log('success');
// } )

// const path = require('path')
// const fpath = 'a/b/c/index.html'
// // const fullName = path.basename(fpath)
// // console.log(fullName);
// const nameWithoutExt = path.basename(fpath,'.html')
// console.log(nameWithoutExt);//文件前缀


//创建http web服务器 1.导入http 
// const http = require('http')
// const server = http.createServer();
// server.on('request', function(req, res){
//     console.log('someone visted our web sever');    
// })
// server.listen(8080, function(){
//     console.log('server is running ');   
// })

//req请求对象,包含了与客户端相关的属性
// const http = require('http')
// const sever = http.createServer();
// sever.on('request', (req,res) => {
//     const url = req.url
//     const method = req.method
//     const str ='Your request ulr is ${req.url}, and request method is ${req.method}'
//     console.log(str);
//     //调用res,向客户端发送内容，并且结束
//     res.end(str)
// })
// sever.listen(80, () =>{
//     console.log('sever is running at http://127.0.0.1');   
// })
//res响应对象

//解决中文乱码的问题
// const http = require('http')
// const sever = http.createServer();
// sever.on('request', (req,res) => {
//     // const url = req.url
//     // const method = req.method
//     const str ='你请求的地址是 ${req.url}, 请求的类型是 ${req.method}'
//     console.log(str);
//     //调用res,向客户端发送内容，并且结束
//     res.setHeader('Content-Type', 'text/html; charset=utf-8')
//     res.end(str)
// })
// sever.listen(80, () =>{
//     console.log('sever is running at http://127.0.0.1');   
// })

//根据不同的url响应不同的html内容
const http = require('http')
const server = http.createServer();
server.on('request', (req,res) =>{
    //1.获取url
   const url = req.url;
   //2.默认响应内容 404
   let Content = '404 not Found!'
   //3.判断用户请求是否为/ /index.html首页
   //4.判断用户请求是否为/about 关于页面
   if(url === '/' || url === '/index.html'){
    Content = '<h1>首页</h1>'
   }else if ('/about.html'){
    Content = '<h1>关于页面</h1>'
   }else{
    Content = '404 not Found!'
   }
   res.setHeader('Content-Type', 'text/html; charset=utf-8')
   res.end(Content)
})


server.listen(80, () =>{
    console.log('sever is running at http://127.0.0.1');
    
})






















