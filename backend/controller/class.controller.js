const globalResponse = require('../middleware/globalResponse');
const { StatusCodes } = require('http-status-codes');
const Class = require('../model/Class');

const createClass = async (req, res) => {

    const { className } = req.body;

    if (!className) {
        return res.globalResponse(StatusCodes.PRECONDITION_FAILED, false, 'ClassName Field Missing');
    }

    const existingClass = await Class.findOne({ className });

    if (existingClass) {
        return res.globalResponse(StatusCodes.CONFLICT, false, 'Class Already Exists');

    }

    try {

        const newClass = await Class.create({
            className,
        });

        if (!newClass) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Class Cannot Create Write Now');
        }

        res.globalResponse(StatusCodes.CREATED, true, 'Class Created Successfully' , newClass);

    } catch (err) {
        console.log(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Something Went Wrong In CreateClass controller' , err);

    }


}

const getAllClasses = async (req, res) => {
    try {
        const allClasses = await Class.find();
        res.globalResponse(StatusCodes.OK, true, 'Classes Retrieved Successfully', allClasses);
    } catch (err) {
        console.error(err);
        res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to retrieve classes');
    }
}

const updateClass = async (req, res) => {
    const {classId} = req.params;
    const { className } = req.body;

    if (!classId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassId Not Found');
    }

    if (!className) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassName Field Missing');
    }

    try {
        const updatedClass = await Class.findOneAndUpdate({ _id: classId }, { className }, { new: true });

        if (!updatedClass) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Class Cannot Update Right Now');
        }

        return res.globalResponse(StatusCodes.OK, true, 'Class Update Successfully', updatedClass);
    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to update class');
    }
}

const deleteClass = async (req, res) => {
    const { classId } = req.params;

    if (!classId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'ClassId Not Found');
    }

    try {
        const deletedClass = await Class.findOneAndDelete({ _id: classId });

        if (!deletedClass) {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Class not found or not delete right now');
        }

        return res.globalResponse(StatusCodes.OK, true, 'Class deleted successfully');
    } catch (err) {
        console.error(err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Failed to delete class');
    }
}


module.exports = { createClass, getAllClasses, updateClass , deleteClass }