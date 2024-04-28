const express = require('express');
const router = express.Router();


const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const authorizeAdmin = require('../guards/authorizeAdmin');

const QuestionController = require('../controller/question.controller.js');

router.get('/:classId/:subjectId/:chapterId/:exerciseId', verifyUserMiddleWare , authorizeAdmin ,  QuestionController.getAllQuestions);
router.post('/:classId/:subjectId/:chapterId/:exerciseId', verifyUserMiddleWare , authorizeAdmin , QuestionController.createQuestion);
router.put('/:questionId', verifyUserMiddleWare , authorizeAdmin , QuestionController.updateQuestion);
router.delete('/:questionId', verifyUserMiddleWare , authorizeAdmin , QuestionController.deleteQuestion);



module.exports = router;
