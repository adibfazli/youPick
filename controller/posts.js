var User = require('../models/user');
var Post = require('../models/post');
var multer = require('multer')
// var upload = multer({dest: 'uploads/'});

module.exports = {
    index,
    show,
    create,
    new: newPost,
    edit,
    delete: deletePost,
    likePost
}

function likePost(req, res) {
    Post.findOne({_id: req.params.id}, function(err, post) {
        console.log("post", post)
        if (!post.likes.includes(req.user.id)) {
            post.likes.push(req.user.id);
            post.save(function(err){
                res.redirect('/global');
            });
        } else {
            var likes = post.likes;
            likes = likes.filter( i => {
                i != req.param.id;
            });
            post.likes = likes;
            post.save(function(err) {
                res.redirect('/global');
            })
        }
    });
}

function index(req, res) {
    res.render('mkpost/add', { loggedInUser: req.user._id })
}

function show(req, res) {

}

function create(req, res) {
    const post = {};
    post.url = req.file.url;
    post.caption = req.body.caption;
    post.user = req.user;
    Post.create(post, function(err, pst) {
        console.log( "***** pst : ",pst)
        pst.populate("userId", function(err, i){
            console.log( "***2** pst : ",pst)
            console.log( "***** I : ",i)
            req.user.posts.push(pst);
            req.user.save(function(err){
                res.redirect('/global');
            })
        })
    });
}


function newPost(req, res) {

}

function edit(req, res) {

}

function deletePost(req, res) {
    Post.findByIdAndDelete({_id: req.params.id}, function(err, post){
        res.redirect('/global');
    });
}

