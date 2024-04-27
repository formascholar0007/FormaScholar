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
    timestamps:true
})

const ChapterModel = mongoose.model("Chapter", ChapterSchema);
module.exports = ChapterModel;