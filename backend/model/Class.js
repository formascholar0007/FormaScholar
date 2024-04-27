
const mongoose =  require('mongoose');

const classSchema = mongoose.Schema({
  
    className:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const ClassModel = mongoose.model('Class',classSchema);
module.exports = ClassModel;
