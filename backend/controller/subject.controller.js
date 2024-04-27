const { StatusCodes } = require('http-status-codes');
const Subject = require('../model/Subject.js');

const createSubject = async (req, res) => {
    const { classId } = req.params;
    const { subjectName } = req.body;

    if (!subjectName) {
        return res.globalResponse(StatusCodes.PRECONDITION_FAILED, false, 'Subject Field Missing');
    }
    if (!classId) {
        return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'ClassId Missing');
    }
    try {
        const newSubject = await Subject.create({
            subjectName,
            classId
        });

        if (!newSubject) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Subject Cannot Create Write Now');
        }

        return res.globalResponse(StatusCodes.CREATED, true, "Subject Created", newSubject);
    } catch (err) {
        console.log(err)
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Something Went Wrong In CreateSubjectController', err);

    }


}

const getAllSubject = async(req,res)=>{

const {classId} = req.params;

    try {
        const allSubjects = await Subject.find({classId});
        
        res.globalResponse(StatusCodes.OK, true, 'Subject Retrieved Successfully', allSubjects);
    } catch (err) {
        console.error(err);
        res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to retrieve classes');
    }

}

const updateSubject = async (req, res) => {
    const { subjectId, subjectName } = req.body;

    if (!Id) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'SubjectId Not Found');
    }

    if (!subjectName) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'SubjectName Field Missing');
    }

    try {
        const updatedSubject = await Class.findOneAndUpdate({ _id: subjectId }, { subjectName }, { new: true });

        if (!updatedSubject) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Subject Cannot Update Right Now');
        }

        return res.globalResponse(StatusCodes.OK, true, 'Subject Update Successfully', updatedSubject);
    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to update Subject');
    }
}

const deleteSubject = async (req, res) => {
    const { subjectId } = req.body;

    if (!subjectId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'SubjectId Not Found');
    }

    try {
        const deletedClass = await Class.findOneAndDelete({ _id: subjectId });

        if (!deletedClass) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Subject not found Or not delete right now');
        }

        return res.globalResponse(StatusCodes.OK, true, 'Subject deleted successfully');
    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to delete subject');
    }
}

module.exports = { createSubject , getAllSubject ,updateSubject , deleteSubject }