const express = require('express');
const router = express.Router();
const ClassController = require('../controller/class.controller.js');
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const authorizeAdmin = require('../guards/authorizeAdmin');

router.get('/', verifyUserMiddleWare ,  ClassController.getAllClasses);
router.post('/', verifyUserMiddleWare , authorizeAdmin , ClassController.createClass);
router.put('/:classId', verifyUserMiddleWare , authorizeAdmin , ClassController.updateClass);
router.delete('/:classId', verifyUserMiddleWare , authorizeAdmin , ClassController.deleteClass);

module.exports = router;