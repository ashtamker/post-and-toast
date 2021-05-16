const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers.js');

router.post('/signin', signin);
router.post('/signup', signup);



module.exports = router;