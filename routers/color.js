const express = require('express');
const router = express.Router();

const {isAuthenticated,createColor} = require('../controllers');

router.post('/',isAuthenticated,createColor);

module.exports = router;
