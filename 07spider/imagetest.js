/**
 * Created by dllo on 17/8/8.
 */

var download = require('./download');

var imageArray = [
    'http://img3.duitang.com/uploads/item/201508/30/20150830122107_hxJEV.jpeg',
    'http://d.ifengimg.com/mw640_q95/y0.ifengimg.com/e7f199c1e0dbba14/2015/1010/rdn_5618adfed8adf.jpeg',
    'http://jiangsu.china.com.cn/uploadfile/2017/0727/1501119662861625.jpg',
    'http://img.jp14.com/uploads/allimg/201706/9999/96d154f469.jpg',
    'http://www.umelady.com/uploads/allimg/170721/1153121012-14.jpg',
    'http://img.mp.sohu.com/q_mini,c_zoom,w_640/upload/20170630/42ea9487ea514a74a43f74edc7fcdbb7_th.jpg'
]

imageArray.forEach(function (item,index) {
    download(item,'imgs',index+'.jpg');
})




