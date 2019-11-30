var express = require('express');
var router = express.Router();
var globalCtrl = require('../controller/global');

router.get('/' , globalCtrl.show)

module.exports = router;