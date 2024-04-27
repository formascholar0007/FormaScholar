const express = require('express');
const route = express.Router();
const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const authorizeAdmin = require('../guards/authorizeAdmin');
const subjectController = require('../controller/subject.controller.js');


route.get('/' , verifyUserMiddleWare , authorizeAdmin, subjectController.getAllSubject);
route.post('/' ,verifyUserMiddleWare , authorizeAdmin, subjectController.createSubject);
route.put('/' ,verifyUserMiddleWare , authorizeAdmin, subjectController.updateSubject);



module.exports = route;