var User = require('../models/user');

module.exports = {
  index ,
  add ,
}

function index(req, res) {
  // console.log(req.user)
    res.render('profiles/show' , {user : req.user})
}
function add(req , res){
  res.render('profiles/add')
}




// function index(req, res, next) {
//     console.log(req.query)
//     // Make the query object to use with Student.find based up
//     // the user has submitted the search form or now
//     let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
//     // Default to sorting by name
//     let sortKey = req.query.sort || 'name';
//     Student.find(modelQuery)
//     .sort(sortKey).exec(function(err, students) {
//       if (err) return next(err);
//       // Passing search values, name & sortKey, for use in the EJS
//       res.render('users/index', {
//         users,
//         user: req.user,
//         name: req.query.name,
//         sortKey
//       });
//     });
//   }