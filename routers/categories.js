const express = require('express');
const router = express.Router();

const {createCategory, getCategories, updateCategory, deleteCategory, isAuthenticated} = require('../controllers');

router.post('/', isAuthenticated,createCategory);
router.get('/', getCategories);
router.put('/',isAuthenticated,updateCategory);
router.delete('/id', isAuthenticated, deleteCategory);

module.exports = router;
