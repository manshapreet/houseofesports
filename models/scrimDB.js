 const mongoose = require('mongoose');
 const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const scrimSchema = new Schema({
    
    scrimshortform: {type:String,required:true},
    scrimname:{type:String,required:true,unique:true},

});

module.exports =mongoose.model('Scrims',scrimSchema);