var express = require('express');
var router = express.Router();
var ProfileCtrl = require('../controller/profile')



/* GET users listing. */
router.get('/profile', ProfileCtrl.index);
router.get('/profile/add' , ProfileCtrl.add)

module.exports = router;
