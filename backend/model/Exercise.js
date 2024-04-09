const mongoose = require('mongoose');

const ExerciseSchema = mongoose.Schema({
     exerciseName:{
        type:String,
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
    timestamp:true
});

const ExerciseModel = mongoose.model(ExerciseSchema);
module.exports = ExerciseModel;