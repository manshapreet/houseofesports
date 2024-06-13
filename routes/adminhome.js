const path = require('path');
const express = require('express');
const router = express.Router();


const adminHomeController = require('../controller/adminHomecontroller.js');
const scrimController = require('../controller/scrimcontroller.js');
const team_scrim_controller = require('../controller/team_scrim_controller.js');
const player_team_scrim_controller = require('../controller/player_team_scrim_controller.js');
const teamController = require('../controller/teamcontroller.js')
const playercontroller = require('../controller/playercontroller.js');


router.get('/',adminHomeController.loadAdminHome);
router.get('/logout',adminHomeController.logout);

router.post('/addscrim',scrimController.addScrim);
router.get('/getscrims',scrimController.getScrims);
router.post('/deletescrim',scrimController.deleteScrim);

router.post('/addteam',team_scrim_controller.addTeamToScrim);
router.get('/getteams',team_scrim_controller.getTeams);
router.post('/addteamentries', team_scrim_controller.addTeamEntries)
router.post('/removeteam',team_scrim_controller.removeTeamFromScrim);

router.post('/addplayerdata',player_team_scrim_controller.addplayerdata);
router.get('/getplayerdata',player_team_scrim_controller.getplayerdata);
router.post('/removeplayer', player_team_scrim_controller.removeplayer);

router.post('/addnewteam', teamController.addteam);
router.get('/getallteams',teamController.getteam);

router.post('/addnewplayer', playercontroller.addplayer);
router.get('/getALLteamPlayers',playercontroller.getALLteamPlayers);

module.exports = router;