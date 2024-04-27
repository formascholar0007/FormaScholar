const { StatusCodes } = require('http-status-codes');
const Chapter = reqiure('../model/Chapter')

const createChapter = async (req, res) => {
    const { classId, subjectId } = req.params;
    const { chapterName } = req.body;

    if (!classId || !subjectId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassId Not Found || SubjectId Not Found');
    }

    if (!chapterName) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'Chapter Name Missing');
    }
    try {
        const newChapter = await Chapter.create({
            chapterName,
            classId,
            subjectId
        });

        if (!newChapter) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Something went wrong while creating new chapter');
        }

        return res.globalResponse(StatusCodes.Ok, true, 'Chapter Created', newChapter);
    } catch (err) {
        console.log(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server error in createChapter controller');

    }
}

const getAllChapter = async (req, res) => {
    const { classId, subjectId } = req.params;
    if (!classId || !subjectId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassId Not Found || SubjectId Not Found');
    }

    try {
        const Chapters = await Chapter.find({
            classId,
            subjectId
        });

        return res.globalResponse(StatusCodes.Ok, true, 'Chapter Fetched', Chapters);
    } catch (err) {
        console.log(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server error in getallchapters controller');

    }
}

const updateChapter = async (req, res) => {
    const { chapterId, chapterName } = req.body;
    if (!chapterId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ChapterId Missing');
    }
    try {
        const updatedChapter = await Chapter.findOneAndUpdate({
            _id: chapterId
        }, { chapterName }, { new: true });

        if (!updateChapter) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Chapter Cannot Update Right Now');
        }

        return res.globalResponse(StatusCodes.OK, true, 'Subject Update Successfully', updatedChapter);
    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to update Chapter');
    }
}

const deleteChapter = async (req, res) => {
    const {chapterId} = req.body;

    if (!chapterId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ChapterId Not Found');
    }
    try {
        const deletedChapter = await Chapter.findOneAndDelete({ _id: chapterId });

        if (!deletedChapter) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Chapter not found Or not delete right now');
        }
        return res.globalResponse(StatusCodes.OK, true, 'Chapter deleted successfully');
    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to delete Chapter');
    }


}


module.exports = { createChapter, getAllChapter, updateChapter, deleteChapter }