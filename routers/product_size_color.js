const express = require('express');
const router = express.Router();

const {isAuthenticated,createProductSizeColor} = require('../controllers');

router.post('/', isAuthenticated, createProductSizeColor);

module.exports = router;
