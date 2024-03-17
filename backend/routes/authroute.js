const express = require('express');
const route = express.Router();
const authController = require('../controller/authController');
const registerValidateSchema = require('../middleware/registerValidate');
const registerSchema = require('../validation/registerSchema');

route.post('/register',registerValidateSchema(registerSchema), authController.register);

module.exports = route;
