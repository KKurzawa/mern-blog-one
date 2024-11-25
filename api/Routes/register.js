const express = require('express');
const router = express.Router();

// import RegisterUser from '../controllers/RegisterController.js';
// import CreatePost from '../controllers/CreatePostController.js';
const LikePost = require('../controllers/LikePostController.js')


router.put('/post:id', LikePost)

module.exports = router