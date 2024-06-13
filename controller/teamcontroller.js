const teamDB = require('../models/teamDB');
const team_scrimDB = require('../models/team_scrimDB');

module.exports.addteam = async(req, res) => {
    console.log(req.body);
    const { teamname, teamshortform} =req.body;

   // console.log("incoming playerdata", member_name, scrimname, teamname, match_wins, position_points, kills, damage, total_points);
     
    const team = await teamDB.findOne({teamname});
    // console.log(player);

    if(team){
       console.log('error team already exists');
        
    //     // playerDB.updateOne(player, {match_wins, position_points, kills, damage, total_points})
    //     //   .then(()=>{
    //     //       console.log('updated player data')
    //     //       // res.render('admin');
    //     //       })
    //     //   .catch(err =>{console.log(err);});
    return res.redirect('/adminhome');
     }
    
        //console.log('player doesnt exist')
      
      let newTeam = new teamDB ({teamname, teamshortform});

      newTeam.save()
       .then(()=>{
           console.log('team added success');
            res.redirect('/adminhome');
       })
       .catch(err =>{console.log(err);});
      
}


module.exports.getteam = async(req, res) => {

    if(req.session.authorised) {
        const scrimname = req.query.scrimname
    
    const allTeams=await teamDB.find({});
    // const uniqueTeams = await teamDB.distinct("teamname")
    
    const teamsalreadyADDedtoScrim = await team_scrimDB.find({scrimname})

    //   //console.log('playersalreadyADDedtoScrim',playersalreadyADDedtoScrim)
     
     for(let i = 0; i< teamsalreadyADDedtoScrim.length; i++){ 
        for(let j=0; j<allTeams.length; j++){
            if(teamsalreadyADDedtoScrim[i].teamname === allTeams[j].teamname){
                allTeams.splice(j,1); continue;}    
       }  
    }

    res.send(allTeams);}
}
