var express = require('express');
var router = express.Router();
var ProfileCtrl = require('../controller/profile')
var User = require('../models/user')
var Post = require('../models/post')

router.get('/:id', function (req, res) {
    User.findOne({ _id: req.params.id }).populate('posts').exec(
        (err, user) => {
            console.log(" user router  :::",user)
            res.render('profiles/show', { user });
        });
});

module.exports = router;