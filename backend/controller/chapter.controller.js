const { StatusCodes } = require('http-status-codes');


const createChapter = async (req, res) => {
    const {classId , subjectId} = req.params;
    const {chapterName} = req.body;

   

  
}

const getAllChapter = async (req, res) => {
    console.log("create chapter");
}

const updateChapter = async (req, res) => {
    console.log("create chapter");
}

const deleteChapter = async (req, res) => {
    console.log("create chapter");
}


module.exports = { createChapter , getAllChapter , updateChapter , deleteChapter}
