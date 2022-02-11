const express = require('express');
const router = express.Router();
const {createBranding, getBranding, updateBranding,deleteBranding, isAuthenticated} = require('../controllers');

router.post('/',isAuthenticated, createBranding);
router.get('/',getBranding);
router.put('/',isAuthenticated,updateBranding);
router.delete('/', isAuthenticated, deleteBranding);

module.exports = router;
