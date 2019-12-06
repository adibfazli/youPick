var User = require('../models/user');
var Post = require('../models/post');

module.exports = {
  index ,
  addBio,
  deleteBio,
}

function addBio(req , res){
    User.findById(req.user.id , function(err ,user){
      console.log("bioooooooo >>>>>>>>>",user)
      user.bio = req.body.bio
      user.save(function(err , bio){
        res.redirect('/profile')
      })
    })
}

function deleteBio(req , res){
  User.findById(req.user.id, function(err , user){
    user.bio=""
    user.save(function(err, deleteBio){
      res.redirect('/profile')
    });
  });
}

function index(req, res) {
  User.findById(req.user.id ).populate('posts').exec(
    function(err , user){
      console.log('****** profileBtn :',user)
      res.render('profiles/show' , {
        user ,
        });
    });
};