var User = require('../models/user');
var Post = require('../models/post');
var multer = require('multer')

module.exports = {
    index,
    show,
    create,
    delete: deletePost,
    likePost,
    addComment,
    deleteComment
}

function deleteComment (req, res) {
    Post.findById(req.params.p_id, function(err, post){
        post.comments.id(req.params.c_id).remove();

        post.save().then(function(){
            res.json({success: true});
        }).catch(err => {res.status.json({ err: err }); });
        res.redirect('/global');
    })
}

function addComment(req, res) {
    Post.findById(req.params.id, function(err, post) {
        let commentObj = {};

        commentObj.comment = req.body.comment;
        commentObj.user = req.user.name;

        post.comments.push(commentObj);
        post.save();
        res.redirect('/global');
    })
}

function likePost(req, res) {
    Post.findOne({_id: req.params.id}, function(err, post) {
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
            post.save(function(err, post) {
                res.redirect('/global');
            })
        }
    });
}

function index(req, res) {
    res.render('mkPost/add', { loggedInUser: req.user._id })
}

function show(req, res) {

}

function create(req, res) {
    const post = {};
    post.url = req.file.url;
    post.caption = req.body.caption;
    post.user = req.user;
    Post.create(post, function(err, pst) {
        pst.populate("userId", function(err, i){
            req.user.posts.push(pst);
            req.user.save(function(err){
                res.redirect('/global');
            })
        })
    });
}

function deletePost(req, res) {
    User.findById(req.user.id).populate('posts').exec(
        
        function(err, user) {
            let posts = user.posts;
            user.posts = user.posts.filter(i => {
                if (i._id.toString() != req.params.id) {
                    return i;
                }
            });
            user.save();
            Post.findById(req.params.id, function(err, post){
                if (post.user._id == req.user.id) {
                    post.remove();
                }
                res.redirect('/global');
            });
        }
    )
}

