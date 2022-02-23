const express = require('express');
const router = express.Router();
const {createProduct,isAuthenticated,getProductById,getProducts, getProductByBranding,getProductByCategory,deleteProducts} = require('../controllers')

router.post('/',isAuthenticated,createProduct);
router.get('/',getProducts);
router.get('/:product_id',getProductById);
router.get('/category/:category_id',getProductByCategory);
router.get('/branding/:branding_id',getProductByBranding);
router.delete('/',isAuthenticated,deleteProducts);
module.exports = router;
