const express = require('express');
const route = express.Router();
const authController = require('../controller/authController');
const registerValidateSchema = require('../middleware/registerValidate');
const registerSchema = require('../validation/registerSchema');
const loginValidatorSchema = require('../middleware/loginValidator');
const loginSchema = require('../validation/loginSchema');

route.post('/register',registerValidateSchema(registerSchema), authController.register);
route.post('/login' ,loginValidatorSchema(loginSchema),authController.login);

module.exports = route;
