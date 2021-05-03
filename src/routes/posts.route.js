const express = require('express');

const router = express.Router();
const postController = require('../controllers/posts.controllers');

router
.get('/', postController.getPosts)
.post('/', postController.createPost)
 
module.exports = router;