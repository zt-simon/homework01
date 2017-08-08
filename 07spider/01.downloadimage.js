/**
 * Created by dllo on 17/8/8.
 */

//http://img2.niutuku.com/desk/1208/2037/ntk-2037-2910.jpg(图片下载地址;)
var fs = require('fs');
var request = require('request');
var path = require('path');

var imagePath = path.join(__dirname,'images','image1.jpg');// 拼接图片存储路径(图片要保存的地方);
var imageURL = "http://img2.niutuku.com/desk/1208/2037/ntk-2037-2910.jpg";//图片下载地址;(图片在哪里下载)

//request(imageURL).pipe(fs.createWriteStream(imagePath));// 下载并保存图片;步骤1:下载;步骤2: 导流,以流的形式传递刚刚下载的数据图片; 步骤3: fs根据传递过来的流以及图片路径,创建文件;



//  封装成函数;(下载函数) 参数1: 要下载内容的地址;
    //参数2: 要保存的文件夹名
    //参数3: 要保存的文件名;
function download(url,directory,filename) {
    // 根据当前目录生成文件夹目录;
    var dir = path.join(__dirname,directory);
    //判断文件夹是否存在;
    var isDir = fs.existsSync(dir);
    // 不存在,创建
    if(!isDir){
        fs.mkdir(dir);
    }
    // 生成保存文件路径
    var filePath = path.join(dir,filename);
    // 下载并保存;
    request(url).pipe(fs.createWriteStream(filePath));
}

download(imageURL,'img','image1.jpg');




// var stat = fs.statSync(path.join(__dirname,'file'));//  判断是不是一个文件
//
// if (stat.isDirectory()) {
//     console.log('文件夹存在')
// }else {
//     console.log('不存在')
// }

// var isDir= fs.existsSync(path.join(__dirname,'images'))
// //判断文件夹是否存在;
// if(isDir){
//     console.log('文件夹存在')
// }else {
//     console.log('文件夹不存在')
// }