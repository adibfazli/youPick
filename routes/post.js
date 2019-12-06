var express = require('express');
var router = express.Router();
var postCtrl = require('../controller/posts');

const multer = require('multer');
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "jpeg", "png"],
  // transformation: [{ width: 600, height: 600, crop: "limit" }]
});
const parser = multer({ storage: storage });


router.post('/post', parser.single("image"), postCtrl.create );

router.delete('/deletePost/:id', postCtrl.delete);
router.get('/mkPost/add', postCtrl.index);
router.put('/likePost/:id', postCtrl.likePost);
router.put('/addComment/:id', postCtrl.addComment);
router.put('/deleteComment/:p_id/:c_id', postCtrl.deleteComment);


module.exports = router;