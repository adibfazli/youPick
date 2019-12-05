var User = require('../models/user');
var Post = require('../models/post');

module.exports = {
  index ,
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