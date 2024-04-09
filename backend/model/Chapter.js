const mongoose = require('mongoose');

const ChapterSchema = mongoose.Schema({
    chapterName:{
        type:String,
        required:true
    },
    subjectId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    classId:{
        type:mongoose.Types.ObjectId,
        required:true
    },

},{
    timestamp:true
})

const ChapterModel = mongoose.model(ChapterSchema);
module.exports = ChapterModel;


