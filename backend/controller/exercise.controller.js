const globalResponse = require('../middleware/globalResponse');
const { StatusCodes } = require('http-status-codes');
const Exercise = require('../model/Exercise');
const Question = require('../model/Question');
const Subject = require('../model/Subject');



const createExercise = async (req, res) => {
    const { classId, subjectId, chapterId } = req.params;
    const { exerciseName } = req.body;
    if (!classId || !subjectId || !chapterId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassId Not Found || SubjectId Not Found || ChapterId Not Found');
    }

    if (!exerciseName) {
        return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Exercise Name Missing');
    }

    try {

        const existingExercise = await Exercise.findOne({
            exerciseName,
            classId,
            subjectId,
            chapterId
        });

        if (existingExercise) {
            return res.globalResponse(StatusCodes.CONFLICT, false, 'Exercise Already Exists');

        }

        const newExercise = await Exercise.create({
            exerciseName,
            classId,
            subjectId,
            chapterId
        });

        if (!newExercise) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Something went wrong while creating new Exercise');
        }

        return res.globalResponse(StatusCodes.OK, true, 'Chapter Created', newExercise);

    } catch (err) {
        console.log(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server error in createExercise controller');
    }
}

const getAllExercise = async (req, res) => {

    const { classId, subjectId, chapterId } = req.params;

    if (!classId || !subjectId || !chapterId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassId Not Found || SubjectId Not Found || ChapterId Not Found');
    }
    try {
        const exercises = await Exercise.find({ classId, subjectId, chapterId });
        return res.globalResponse(StatusCodes.OK, true, 'Exercises fetched successfully', exercises);
    } catch (err) {
        console.log(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server error in getallExercise controller');
    }

}

const updateExercise = async (req, res) => {
    const { exerciseId } = req.params;
    const { exerciseName } = req.body;

    if (!exerciseId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ExerciseId Missing');
    }
    if (!exerciseName) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ExerciseName Missing');
    }

    try {
        const updatedExercise = await Exercise.findOneAndUpdate({
            _id: exerciseId
        }, { exerciseName }, { new: true });

        if (!updatedExercise) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Exercise Cannot Update Right Now');
        }

        return res.globalResponse(StatusCodes.OK, true, 'Exercise Update Successfully', updatedExercise);
    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to update Exercise');
    }
}

const deleteExercise = async (req, res) => {

    const { exerciseId } = req.params;
    if (!exerciseId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ExerciseId Missing');
    }

    try {
        const deletedExercise = await Exercise.findOneAndDelete({ _id: exerciseId });

        if (!deletedExercise) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Exercise not found Or not delete right now');
        }
        return res.globalResponse(StatusCodes.OK, true, 'Exercise deleted successfully');

    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to delete Exercise');
    }


}

module.exports = { createExercise, getAllExercise, updateExercise, deleteExercise }