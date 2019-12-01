var User = require('../models/user');

module.exports = {
    show,
}

function show( req , res){
    res.render('global/show')
}