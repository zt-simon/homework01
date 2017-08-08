/**
 * Created by dllo on 17/8/8.
 */

var cheerio = require('cheerio');
var request = require('request');
var download = require('./download');
var url = "http://www.fruitday.com/";

request(url,function (error,response,body) {

    var $ = cheerio.load(body);
    var imgArr = []
    $(".fruit-kinds>.good-list .pro_list .s-img .lazy").each(function (index,element) {
        // console.log($(element).attr('src'));
        // console.log($(element))
        imgArr.push($(element).attr('data-original'));
    })

    imgArr.forEach(function (item,index) {
        download(item,'imgss',index+'.jpg');
    })


    // $(".fruit-kinds .good-list .s-info .s-name").each(function (index,element) {
    //     console.log($(element).text());
    // })


})



