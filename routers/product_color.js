const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const {isAuthenticated,createProductColor,getProductColor} = require('../controllers')

router.post('/',isAuthenticated,upload.any(),createProductColor);
router.get('/', getProductColor);

module.exports = router;
