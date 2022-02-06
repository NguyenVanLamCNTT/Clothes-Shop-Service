const express = require('express');
const router = express.Router();

const {createUser,isAuthenticated,loginUser,refreshTokenUser,changePassword} = require('../controllers');

router.post('/register',createUser);
router.post('/login',loginUser);
router.post('/refresh-token',refreshTokenUser);
router.put('/change-password',isAuthenticated,changePassword);

module.exports = router;
