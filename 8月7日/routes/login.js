/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    // console.log(req.body.username);
    res.render('01Login');

});

module.exports = router;

