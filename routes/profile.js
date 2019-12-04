var express = require('express');
var router = express.Router();
var ProfileCtrl = require('../controller/profile')



/* GET users listing. */
router.get('/profile', ProfileCtrl.index);


module.exports = router;
