const player_team_scrimDB = require('../models/player_team_scrimDB.js')
const scrimDB = require('../models/scrimDB.js')
const team_scrimDB = require('../models/team_scrimDB.js')

module.exports.addplayerdata = async(req, res) => {
    // console.log(req.body);
    const {  member_name, scrimname, teamname, kills, damage} =req.body;

   
    const player = await player_team_scrimDB.findOne({member_name,scrimname,teamname});
   // console.log('prevplayerkills',player.kills);


    if(player){
        console.log('error player already exists');



         const dataFromTeam_scribDB = await team_scrimDB.findOne({scrimname,teamname}); 
        

         
        console.log('dataFromTeam_scribDB',dataFromTeam_scribDB.team_position_pts);
        const prev  =        Number(dataFromTeam_scribDB.team_total_kills) - Number(player.kills)  
        const team_total_kills= Number(kills) + Number(prev) 
       
        const team_total_pts = Number(team_total_kills) + Number(dataFromTeam_scribDB.team_position_pts);
        
        console.log('teamTotalkills',team_total_kills);

        
     

        player_team_scrimDB.updateOne(player, {kills, damage})
          .then(()=>{
              console.log('updated player data')
             
              })
          .catch(err =>{console.log(err);});
        

         team_scrimDB.updateOne({scrimname, teamname},{team_total_kills,team_total_pts})    //, team_total_points
         .then(()=>{
             console.log('updated team data')
       
             })
         .catch(err =>{console.log(err);});

    }
    else{
        console.log('player doesnt exist')
      
      let newPlayer = new player_team_scrimDB ({member_name, scrimname, teamname, kills, damage});

      newPlayer.save()
       .then(()=>{
           console.log('player added success');
            res.redirect('/adminhome');
       })
       .catch(err =>{console.log(err);});
      }
}





module.exports.getplayerdata = async(req, res) => {
 
    const allPlayers = await player_team_scrimDB.find({});//.select({ "currentUser":1, "question": 1, "_id": 1});
   // console.log('yaha tak aa gayi request',allPlayers);
    const allScrims=await scrimDB.find({});
    //console.log("scrims from DB",allScrims)
    res.send(allPlayers);
    //res.send({allPlayers,allScrims});
}


module.exports.removeplayer = async(req,res) =>{
    console.log("delete player reached");
    const {scrimname, teamname, member_name} = req.body;
    try{
        await player_team_scrimDB.deleteOne({scrimname, 
            teamname,
            member_name
        });

        console.log("deleted player from scrim");
        res.redirect('/adminhome');

    }
    catch(err){console.log(err)}
}