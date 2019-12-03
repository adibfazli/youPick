var express = require('express');
var router = express.Router();
var ProfileCtrl = require('../controller/profile')
var User = require('../models/user')


router.get('/:id' ,function(req , res){
    User.findOne({_id : req.params.id} ,function(err , user){
        console.log(user)
        res.render('profiles/show' , {user});

    });
})


module.exports = router;