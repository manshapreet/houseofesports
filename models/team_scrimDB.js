const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const teamSchema = new Schema({
   
   scrimname:{type:String,required:true},
   teamname:{type:String,required:true},
   team_wins:{type:Number,required:true},
   team_position_pts:{type:Number,required:true}, 
   played_matches: {type:Number,required:true},
   team_total_kills:{type:Number,required:true}, 
   team_total_pts:{type:Number,required:true}

});

module.exports =mongoose.model('team_scrims',teamSchema);