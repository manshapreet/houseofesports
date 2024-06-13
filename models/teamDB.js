const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const teamSchema = new Schema({
   
   teamname:{type:String,required:true},
   teamshortform:{type:String,required:true}

});

module.exports =mongoose.model('teams',teamSchema);