
const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    questionNo : {
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    exerciseId:{
        type:mongoose.Types.ObjectId,
    },
    chapterId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    subjectId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    classId:{
        type:mongoose.Types.ObjectId,
        required:true
    }

},{
    timestamps:true
});

const QuestionModel = mongoose.model(QuestionSchema);
module.exports = QuestionModel;