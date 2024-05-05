const express = require('express');
const route = express.Router();
const authController = require('../controller/auth.controller.js');
const registerValidateSchema = require('../middleware/registerValidate');
const registerSchema = require('../validation/registerSchema');
const loginValidatorSchema = require('../middleware/loginValidator');
const loginSchema = require('../validation/loginSchema');
const userInfoValidatorSchema = require('../middleware/userInfoValidator');
const userAdditionalSchemaJoi = require('../validation/userInfoSchema');
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');





route.post('/register',registerValidateSchema(registerSchema), authController.register);
route.post('/login' ,loginValidatorSchema(loginSchema),authController.login);
route.post('/additionalInfo',verifyUserMiddleWare , userInfoValidatorSchema(userAdditionalSchemaJoi), authController.userAdditionalInfo);
route.post('/forgotPassword' , authController.forgotPassword);
route.post('/resetPassword/:userId/:token' , authController.resetPassword);

module.exports = route;
