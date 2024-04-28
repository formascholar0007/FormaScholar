const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    subjectName:{
        type:String,
        required:true
    },
    classId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    isExercise: {
        type: Boolean,
        default: false 
    }
},{
    timestamps:true
})

const SubjectModel = mongoose.model("Subject" , subjectSchema);
module.exports = SubjectModel;