var express = require('express');
var router = express.Router();
var globalCtrl = require('../controller/global');

router.get('/global' , isLoggedIn, globalCtrl.show);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;