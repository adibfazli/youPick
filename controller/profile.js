var User = require('../models/user');
var Post = require('../models/post');

module.exports = {
  index ,
  addBio,
}

function addBio(req , res){
    User.findById(req.user.id , function(err ,user){
      console.log("bioooooooo >>>>>>>>>",user)
      user.bio = req.body.bio
      user.save(function(err , bio){
        res.redirect('/global')
      })
    })
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