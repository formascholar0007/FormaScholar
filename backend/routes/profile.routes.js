const express = require('express');
const route = express.Router();
const profileController = require('../controller/profile.controller.js');
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');

const authorizeAdmin = require('../guards/authorizeAdmin.js');




route.get('/' , verifyUserMiddleWare, profileController.getProfile);
route.put('/',verifyUserMiddleWare, profileController.updateProfile);
route.get('/getAllUsers',verifyUserMiddleWare, authorizeAdmin , profileController.getAllUsersProfile);
route.delete('/deleteUser/:userId',verifyUserMiddleWare, authorizeAdmin , profileController.deleteUser);

module.exports = route;
