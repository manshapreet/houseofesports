const team_scrimDB = require('../models/team_scrimDB')
const player_team_scrimDB = require('../models/player_team_scrimDB')

module.exports.addTeamToScrim = async (req, res) => {
   
   
     console.log(req.body);
    const { scrimname, teamname }=req.body;
   const team = await team_scrimDB.findOne({scrimname,teamname});
    const team_wins=0;
    const team_position_pts=0;
    const played_matches =0
    const team_total_kills=0;
    const team_total_pts=0;
    /////////////////////////////////////////
    // const scrimname='pubgroung';
    // const teamname='dogs';
    
    // const team_temp= await teamDB.findOne({scrimname});
    // console.log('here',team_temp);
    ////////////////////////////////


     if(team){
        console.log('team from db',team);

       return res.redirect('/adminhome')
    }
    
     if(!team){
      //console.log(scrimname,teamname,team_wins,team_position_pts, team_total_kills, team_total_pts)
      console.log('team not found')
     }
    
    let newTeam = new team_scrimDB ({scrimname,teamname,team_wins,team_position_pts, played_matches, team_total_kills, team_total_pts});
    newTeam.save()
     .then(()=>{
         console.log('team added success');
         res.redirect('/adminhome');
     })
     .catch(err =>{console.log(err);});


}


module.exports.getTeams = async (req, res) => {

    const allTeams = await team_scrimDB.find({});//.select({ "currentUser":1, "question": 1, "_id": 1});
   
  //  console.log("teams from DB",allTeams)
      res.send(allTeams)
}



module.exports.addTeamEntries=async (req, res) => {



  const {scrimname,teamname,team_wins,team_position_pts, played_matches } = req.body;

  // const total_kills= await player_team_scrimDB.find({scrimname,teamname})
  // console.log(total_kills)

  const team = await team_scrimDB.findOne({scrimname,teamname});

  const team_total_pts=Number(team.team_total_kills)+ Number(team_position_pts);

  team_scrimDB.updateOne({scrimname,teamname},{team_wins, team_position_pts, played_matches, team_total_pts})
  .then(()=>{
    console.log('updated team data')
    // res.render('admin');
    })
  .catch(err =>{console.log(err);});


};


module.exports.removeTeamFromScrim= async (req,res) =>{
  console.log("deleteteamscrim reached");
    const {scrimname, teamname} = req.body;
    try{
        await team_scrimDB.deleteOne({scrimname:scrimname, teamname:teamname});

        await player_team_scrimDB.deleteMany({scrimname:scrimname, teamname:teamname});

        console.log("deleteteam from scrim");
        res.redirect('/adminhome');

    }
    catch(err){}
}