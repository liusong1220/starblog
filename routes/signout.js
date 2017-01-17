/**
 * Created by hust on 2017/1/16.
 */
var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
    req.session.user=null;
    req.flash('success','登出成功');
    //登出成功后跳转到主页
    res.redirect('/posts');
});

module.exports = router;
