const express = require('express');
const router = express.Router();

const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const authorizeAdmin = require('../guards/authorizeAdmin');
const ChapterController = require('../controller/chapter.controller.js');

router.get('/:classId/:subjectId', verifyUserMiddleWare  ,  ChapterController.getAllChapter);
router.post('/:classId/:subjectId', verifyUserMiddleWare , authorizeAdmin , ChapterController.createChapter);
router.put('/:chapterId', verifyUserMiddleWare , authorizeAdmin , ChapterController.updateChapter);
router.delete('/:chapterId', verifyUserMiddleWare , authorizeAdmin , ChapterController.deleteChapter);



module.exports = router;