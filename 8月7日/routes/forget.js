/**
 * Created by dllo on 17/8/7.
 */
var express = require('express')
var router = express.Router();

router.get('/',function (req,res) {
    res.render('forget')
})

module.exports = router;