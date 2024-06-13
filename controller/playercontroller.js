const playerDB = require('../models/playerDB')
const player_team_scrimDB = require('../models/player_team_scrimDB')


module.exports.addplayer = async(req, res) => {
    console.log(req.body);
    const { teamname, member_name} =req.body;
     
    const player = await playerDB.findOne({member_name});
    // console.log(player);

    if(player){
       console.log('error player already exists');
    
        return res.redirect('/adminhome');
     }
    
        //console.log('player doesnt exist')
      let newPlayer = new playerDB ({teamname, member_name});

      newPlayer.save()
       .then(()=>{
           console.log('player added success');
            res.redirect('/adminhome');
       })
       .catch(err =>{console.log(err);});
}


module.exports.getALLteamPlayers = async (req, res) =>{

//console.log('params',req.query.teamname);
    
     const teamname  = req.query.teamname;
     const scrimname = req.query.scrimname
     const allPlayers=await playerDB.find({teamname});
     //console.log('allPlayers',allPlayers)

     const playersalreadyADDedtoScrim=await player_team_scrimDB.find({scrimname,teamname})

      //console.log('playersalreadyADDedtoScrim',playersalreadyADDedtoScrim)
     
     for(let i = 0;i<playersalreadyADDedtoScrim.length;i++){ for(let j=0;j<allPlayers.length;j++){ 
      if(playersalreadyADDedtoScrim[i].member_name === allPlayers[j].member_name){
         allPlayers.splice(j,1); continue;}    
       }  }


    // console.log(allPlayers);
     res.send(allPlayers);
}

