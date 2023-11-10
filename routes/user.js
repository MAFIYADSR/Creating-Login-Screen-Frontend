const path = require('path');
const express = require('express');

const router = express.Router();
const userController = require('../controllers/user');




router.post('/signup', userController.signup);
router.post('/Login/login', userController.login);



module.exports = router;