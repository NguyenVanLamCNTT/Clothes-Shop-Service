const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const {isAuthenticated, createImageOfProduct,deleteImage} = require('../controllers');
router.post('/product', isAuthenticated, upload.any(), createImageOfProduct);
router.delete('/product', isAuthenticated, deleteImage);
module.exports = router;
