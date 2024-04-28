
const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    questionNo: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    exerciseId: {
        type: mongoose.Types.ObjectId,
        ref:'Exercise',
        default: ""
    },
    chapterId: {
        type: mongoose.Types.ObjectId,
        ref:'Chapter',
        required: true
    },
    subjectId: {
        type: mongoose.Types.ObjectId,
        ref:'Subject',
        required: true
    },
    classId: {
        type: mongoose.Types.ObjectId,
        ref:'Class',
        required: true
    }

}, {
    timestamps: true
});

const QuestionModel = mongoose.model("Question", QuestionSchema);
module.exports = QuestionModel;