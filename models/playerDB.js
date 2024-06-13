const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const playerSchema = new Schema({
   
   teamname:{type:String,required:true},
   member_name:{type:String,required:true}

});

module.exports =mongoose.model('players',playerSchema);