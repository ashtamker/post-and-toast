const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('its work');
});

 
module.exports = router;