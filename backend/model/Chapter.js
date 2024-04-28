const mongoose = require('mongoose');

const ChapterSchema = mongoose.Schema({
    chapterName:{
        type:String,
        required:true
    },
    subjectId:{
        type:mongoose.Types.ObjectId,
        ref:'Subject',
        required:true
    },
    classId:{
        type:mongoose.Types.ObjectId,
        ref:'Class',
        required:true
    },

},{
    timestamps:true
})

const ChapterModel = mongoose.model("Chapter", ChapterSchema);
module.exports = ChapterModel;