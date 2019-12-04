var User = require('../models/user');
var Post = require('../models/post');

module.exports = {
    show,
}

function show(req, res) {
    // console.log(req.user)
    // Post.find({}, function (err, posts) {
    //     var postsArr = [];

    //     posts.forEach( i => {
    //         i.populate('user').exex()

    //     })
    //     console.log("*******posts in global: ", postsArr)
    //     await res.render('global/show', {
    //         posts: postsArr,
    //         logedInUser: req.user,
    //     });
    // });
    Post.find({}).populate('user').exec(
        (err, posts) => {
            res.render('global/show', {
                posts,
                logedInUser: req.user,
            });
        }
    );

}