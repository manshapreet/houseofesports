// const rankingDB = require('../models/rankingDB')
const player_team_scrimDB = require('../models/player_team_scrimDB')
const scrimDB = require('../models/scrimDB')
const team_scrimDB = require('../models/team_scrimDB')

module.exports.getRankings = async(req,res)=>{
    // console.log(req.query.rank);
//    if(req.query.rank=='all'){
//     res.render('ranking',{

//      });
//     }
    res.render('ranking2')
}


module.exports.getscrimdata= async(req,res)=>{

    // const allPlayers = await playerDB.find({});
    const allScrims=await scrimDB.find({});
    // const allTeams = await teamDB.find({});
    // console.log("scrims from DB",allScrims)
    
     res.send(allScrims);
};    



module.exports.getteamsdata= async(req,res)=>{
    const scrimname = req.query.scrimname;
    const allTeams = await team_scrimDB.find({scrimname});
    // console.log("from DB",allScrims)
    
     res.send(allTeams);
};    


module.exports.getplayersdata= async(req,res)=>{
    const scrimname = req.query.scrimname;
    const allPlayers = await player_team_scrimDB.find({scrimname});
      // console.log("from DB",allScrims)
    
     res.send(allPlayers);
};