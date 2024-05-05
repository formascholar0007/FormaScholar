const express = require('express');
const route = express.Router();
const profileController = require('../controller/profile.controller.js');
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const multer = require('multer');
const authorizeAdmin = require('../guards/authorizeAdmin.js');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/Images');
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+'_'+file.originalname);
    }
});

const upload = multer({storage:storage});
console.log("upload ; ",upload);

route.get('/' , verifyUserMiddleWare, profileController.getProfile);
route.put('/',verifyUserMiddleWare, upload.single('image'), profileController.updateProfile);
route.get('/getAllUsers',verifyUserMiddleWare, authorizeAdmin , profileController.getAllUsersProfile);
route.delete('/deleteUser/:userId',verifyUserMiddleWare, authorizeAdmin , profileController.deleteUser);

module.exports = route;
