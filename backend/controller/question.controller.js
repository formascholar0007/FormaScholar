const globalResponse = require('../middleware/globalResponse');
const { StatusCodes } = require('http-status-codes');
const Question = require('../model/Question');


const createQuestion = async (req, res) => {

    const { classId, subjectId, chapterId, exerciseId } = req.params;
    const { questionNo, question, answer } = req.body;

    if (!classId || !subjectId || !chapterId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassId Not Found || SubjectId Not Found || ChapterId Not Found');
    }

    try {
        const createData = {
            classId,
            subjectId,
            chapterId,
            questionNo,
            question,
            answer
        };
       if(exerciseId){
           createData.exerciseId = exerciseId;
         }
        // Create a new question
        const newQuestion = await Question.create(createData);

        if (!newQuestion) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed To Create Question');
        }
        return res.globalResponse(StatusCodes.OK, true, 'Question created successfully', newQuestion);
    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server error in createQuestion controller');
    }

}


const getAllQuestions = async (req, res) => {

    const { classId, subjectId, chapterId, exerciseId } = req.params;
    if (!classId || !subjectId || !chapterId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassId Not Found || SubjectId Not Found || ChapterId Not Found');
    }

    try {

        if (exerciseId) {
            const questions = await Question.find({
                classId,
                subjectId,
                chapterId,
                exerciseId
            });
            return res.globalResponse(StatusCodes.OK, true, 'Questions fetched successfully', questions);
        } else {
            const questions = await Question.find({
                classId,
                subjectId,
                chapterId
            });
            return res.globalResponse(StatusCodes.OK, true, 'Questions fetched successfully', questions);
        }

    } catch (err) {
        console.log(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server error in getAllQuestions controller');

    }

}


const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const { questionNo, question, answer } = req.body;

    const updateData = {
        ...(questionNo && { questionNo }),
        ...(question && { question }),
        ...(answer && { answer })
    }


    if (!questionId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'QuestionId Missing');
    }

    try {
        const updatedQuestion = await Question.findOneAndUpdate(
            { _id: questionId },
            updateData,
            { new: true }
        );
        if (!updatedQuestion) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'Question not found or not update right now');
        }
        return res.globalResponse(StatusCodes.OK, true, 'Question updated successfully', updatedQuestion);

    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server error in updateQuestion controller');
    }
}


const deleteQuestion = async (req, res) => {
    const { questionId } = req.params;

    if (!questionId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'QuestionId Missing');
    }

    try {

        const deletedQuestion = await Question.findOneAndDelete(
           { _id: questionId }
        );
        if (!deletedQuestion) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Question not found Or not delete right now');
        }
        return res.globalResponse(StatusCodes.OK, true, 'Question deleted successfully');


}catch (err) {
    console.log(err);
    return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server error in deleteQuestion controller');

}

}


module.exports = { createQuestion, getAllQuestions, updateQuestion, deleteQuestion };