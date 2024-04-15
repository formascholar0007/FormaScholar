const mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
    SubjectName:{
        type:String,
        required:true
    },
    classId:{
        type:mongoose.Types.ObjectId,
        required:true
    }
},{
    timestamp:true
})

const SubjectModel = mongoose.model(SubjectSchema);
module.exports = SubjectModel;