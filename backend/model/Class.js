
const mongoose =  require('mongoose');

const ClassSchema = mongoose.Schema({
  
    className:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const ClassModel = mongoose.model('Class',ClassSchema);
module.exports = ClassModel;
