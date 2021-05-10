const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controllers');

router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.patch('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
 
module.exports = router;