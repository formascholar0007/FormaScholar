const express = require('express');
const router = express.Router();

const verifyUserMiddleWare = require('../middleware/verifyUserMiddleWare');
const authorizeAdmin = require('../guards/authorizeAdmin');
const ChapterController = require('../controller/chapter.controller.js');

router.get('/', verifyUserMiddleWare , authorizeAdmin ,  ChapterController.getAllChapter);
router.post('/', verifyUserMiddleWare , authorizeAdmin , ChapterController.createChapter);
router.put('/', verifyUserMiddleWare , authorizeAdmin , ChapterController.updateChapter);
router.delete('/', verifyUserMiddleWare , authorizeAdmin , ChapterController.deleteChapter);



module.exports = router;