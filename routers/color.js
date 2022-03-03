const express = require('express');
const router = express.Router();

const {isAuthenticated,createColor, getColor} = require('../controllers');

router.post('/',isAuthenticated,createColor);
router.get('/',isAuthenticated, getColor);
module.exports = router;
