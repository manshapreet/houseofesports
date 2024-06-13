 const mongoose = require('mongoose');
 const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const userSchema = new Schema({
    username: {type:String,required:true,unique:true},
    password: {type:String,required:true}

});

module.exports =mongoose.model('Users',userSchema);

