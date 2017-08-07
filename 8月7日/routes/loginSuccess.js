/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
//引入路由
var router = express.Router();
var handlerError = require('../public/javascripts/handlerError')
var mysql = require('mysql');

var options= {
    connectionLimit : 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'NEWB'
}

var pool = mysql.createPool(options);

    router.post('/',function (req,res) {
        var username = req.body.username;
        var password = req.body.password;
        var selectDB = `select * from user where username=${username}`
        pool.query(selectDB,function (error,results) {

            handlerError(error,'查询');
            console.log(results);
            if(results.length === 0){
                res.render('loginSuccess',{title:'登录失败'});
            } else{
                if(results[0].password===password){
                    res.render('loginSuccess',{title:'登录成功'});
                } else {
                    res.render('loginSuccess',{title:'登录失败'});
                }
            }
        })
        
    })

// router.post('/', function(req, res) {
//     var username = req.body.username;
//     var password = req.body.password;
//     var mysql = require('mysql');
//     var options = {
//         host: 'localhost',
//         port: 3306,
//         user: 'root',
//         password: ''
//     }
//
//     var connect = mysql.createConnection(options);
//     connect.connect(function (error){
//         if(error){
//             console.log('连接失败')
//         }else {
//             console.log('连接成功')
//         }
//     })
//
//     var useDBSQL = 'use NEWB';
//     connect.query(useDBSQL,function (error) {
//         if(error){
//             console.log('使用失败');
//         }else {
//             console.log('使用成功');
//         }
//
//     })
//
//     var selectSQL ="select * from user where username ="+ "'"+username+"'";
//
//     connect.query(selectSQL,function (error,results) {
//         console.log(results);
//         // console.log(results[0]['password']);
//         if(error){
//             console.log('查询失败');
//             console.log(error);
//         }else {
//             console.log('查询成功');
//             console.dir(results);
//         }
//         if(results.length==0){
//             res.render('loginSuccess',{title:'用户名不存在'});
//         }else {
//             if(password==results[0]['password']){
//                 res.render('loginSuccess',{title:'登录成功'});
//             }else{
//                 res.render('loginSuccess',{title:'密码错误'});
//             }
//         }
//
//     })
//
//
//
// });

module.exports = router;


