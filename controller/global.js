var User = require('../models/user');

module.exports = {
    show,
}

function show( req , res){
    User.find({} ,function(err ,users){
        // console.log(user, req.user);
        res.render('global/show' ,{
            users ,
             logedInUser :req.user
        })
    });
}