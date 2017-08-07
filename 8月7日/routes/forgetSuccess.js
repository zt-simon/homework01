/**
 * Created by dllo on 17/8/7.
 */

var express = require('express');
var router = express.Router();
var handlerError = require('../public/javascripts/handlerError');
var mysql = require('mysql');

// router.get('/',function (req,res) {
//     res.render('forgetSuccess');
// })

var option = {
    connectionLimit : 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'NEWB'
}

var pool = mysql.createPool(option)

    router.post('/',function (req,res) {

        var password = req.body['password'];
        console.log(password);
        var passwordNew = req.body.passwordNew;
        var passwordNew1 = req.body.passwordNew1;
        pool.getConnection(function (error,connection) {
            var select = 'select * from user where password='+password;
            connection.query(select,function (error,results) {
                handlerError('查询1',error);
                if(results.length!==0 && passwordNew===passwordNew1){
                    var update = `update user set password=${passwordNew} where password=${results[0].password}`;
                    connection.query(update,function (error) {
                        if(error){
                            res.send('失败');
                        }else {
                            res.send('成功');
                        }
                    });

                }else {
                    res.send('失败');
                }
                connection.release()
            })
        })
    })
module.exports = router;