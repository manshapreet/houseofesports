const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const playerSchema = new Schema({
    member_name: {type:String,required:true},
    scrimname: {type:String,required:true},
    teamname: {type:String,required:true},
    kills: {type:Number,required:true},
    damage: {type:Number,required:true}
   
});

module.exports =mongoose.model('player_team_scrim',playerSchema);