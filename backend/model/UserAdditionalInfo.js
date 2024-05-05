const mongoose = require('mongoose');

const UserAdditionalSchema = mongoose.Schema({
      
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },

    fullName: {
        type: String,
        required: [true, 'Full name is required']
    },
    about: {
        type: String,
        default:''
    },
    avatar: {
        type: String,
        default:''
    },
    phoneNumber: {
        type: String,
        default:''
    },
    gender: {
        enum: ['male', 'female'],
        type: String,
        required: true
    },
    className: {
        type: String,
        required: [true, 'Class name is required']
    }

},{
    timestamps: true
})

const UserAdditionalModel = mongoose.model('UserInfo',UserAdditionalSchema);
module.exports = UserAdditionalModel