/**
 * Created by dllo on 17/8/8.
 */

var cheerio = require('cheerio');
var request = require('request');
// $ = cheerio.load("<h2 class = 'title'>Hello world </h2>");
// $("h2.title").text('Hello there!');
// $("h2").addClass('welcome');
// $.html();
// console.log($.html());
var url = 'http://cnodejs.org/';
request(url,function (error,response,body) {
    // console.log(body);
    var  $ = cheerio.load(body);
    var items = [];

    $("#topic_list .topic_title").each(function (index,element) {

        // console.log($(element).attr('title'));
        // console.log($(element).attr('href'));
        var item = {
            title:$(element).attr('title'),
            href:$(element).attr('href')
        }
        items.push(item);
    })

    $(".cell .user_avatar>img").each(function (index,element) {
        items[index].icon = $(element).attr('src');

    })

    console.log(items);
    items.each()
})



