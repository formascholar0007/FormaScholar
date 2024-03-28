const express = require('express');
const route = express.Router();
const authController = require('../controller/authController');
const registerValidateSchema = require('../middleware/registerValidate');
const registerSchema = require('../validation/registerSchema');
const loginValidatorSchema = require('../middleware/loginValidator');
const loginSchema = require('../validation/loginSchema');
const multer = require('multer');
const userInfoValidatorSchema = require('../middleware/userInfoValidator');
const userAdditionalSchemaJoi = require('../validation/userInfoSchema');
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads');
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+'_'+file.originalname);
    }
});

const upload = multer({storage:storage});
console.log("upload ; ",upload);

route.post('/register',registerValidateSchema(registerSchema), authController.register);
route.post('/login' ,loginValidatorSchema(loginSchema),authController.login);
route.post('/additionalInfo',verifyUserMiddleWare , upload.single('image'), userInfoValidatorSchema(userAdditionalSchemaJoi), authController.userAdditionalInfo);
route.post('/forgotPassword' , authController.forgotPassword);
route.put('/resetPassword/:userId/:token' , authController.resetPassword);
module.exports = route;
