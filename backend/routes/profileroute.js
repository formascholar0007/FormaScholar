const express = require('express');
const route = express.Router();
const profileController = require('../controller/profileController');

route.get('/:userId' , profileController.getProfile);
route.put('/:userId', profileController.updateProfile);

module.exports = route;
