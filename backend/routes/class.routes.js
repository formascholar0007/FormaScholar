const express = require('express');
const router = express.Router();
const ClassController = require('../controller/class.controller.js');
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const authorizeAdmin = require('../guards/authorizeAdmin');

router.get('/', verifyUserMiddleWare , authorizeAdmin ,  ClassController.getAllClasses);
router.post('/', verifyUserMiddleWare , authorizeAdmin , ClassController.createClass);
router.put('/', verifyUserMiddleWare , authorizeAdmin , ClassController.updateClass);
router.delete('/', verifyUserMiddleWare , authorizeAdmin , ClassController.deleteClass);

module.exports = router;