const express = require('express');
const route = express.Router();
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const authorizeAdmin = require('../guards/authorizeAdmin');
const subjectController = require('../controller/subject.controller.js');


route.get('/:classId' , verifyUserMiddleWare , authorizeAdmin, subjectController.getAllSubject);
route.post('/:classId' ,verifyUserMiddleWare , authorizeAdmin, subjectController.createSubject);
route.put('/' ,verifyUserMiddleWare , authorizeAdmin, subjectController.updateSubject);
route.delete('/', verifyUserMiddleWare , authorizeAdmin , subjectController.deleteSubject);



module.exports = route;