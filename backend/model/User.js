
const mongoose = require('mongoose');

const UserSchema  = mongoose.Schema({

  userName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
  },
  password:{
    type:String,
    required:true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    required: true
  }


})

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;