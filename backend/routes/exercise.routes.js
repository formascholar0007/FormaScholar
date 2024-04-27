const express = require('express');
const router = express.Router();

const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const authorizeAdmin = require('../guards/authorizeAdmin');
const ExerciseController = require('../controller/exercise.controller.js');

router.get('/:classId/:subjectId/:chapterId', verifyUserMiddleWare , authorizeAdmin ,  ExerciseController.getAllExercise);
router.post('/:classId/:subjectId/:chapterId', verifyUserMiddleWare , authorizeAdmin , ExerciseController.createExercise);
router.put('/:exerciseId', verifyUserMiddleWare , authorizeAdmin , ExerciseController.updateExercise);
router.delete('/:exerciseId', verifyUserMiddleWare , authorizeAdmin , ExerciseController.deleteExercise);



module.exports = router;