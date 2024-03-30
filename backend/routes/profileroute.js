const express = require('express');
const route = express.Router();
const profileController = require('../controller/profileController');
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');

route.get('/' , verifyUserMiddleWare, profileController.getProfile);
route.put('/',verifyUserMiddleWare, profileController.updateProfile);

module.exports = route;
