const mongoose = require('mongoose');
require('dotenv').config();

const dataBase =async ()=>{
 await mongoose.connect(
    process.env.MONGO_URL,   
    ).then(()=>{
     console.log("db connected")
    }).catch((err)=>{
        console.log(err);
    })
}

dataBase();
