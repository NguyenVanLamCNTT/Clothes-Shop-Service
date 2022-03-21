const express = require('express');
const router = express.Router();

const {isAuthenticated, createSizeOfProduct} = require('../controllers');

router.post('/', isAuthenticated, createSizeOfProduct);

module.exports = router;
