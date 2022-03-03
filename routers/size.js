const express  = require('express');
const router = express.Router();

const {isAuthenticated,createSize,getSizes}  = require('../controllers');
router.post('/', isAuthenticated, createSize);
router.get('/', isAuthenticated, getSizes);
module.exports = router;
