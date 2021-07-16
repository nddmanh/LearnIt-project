const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const { login, register, getCurrentUser } = require('./../controllers/authController');
const verifyToken = require('../middleware/auth');

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/', verifyToken, getCurrentUser);

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', register);

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post('/login', login)

module.exports = router