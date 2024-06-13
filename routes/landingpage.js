const path = require('path');
const express = require('express');
const router = express.Router();

 const rankingsController = require('../controller/rankingscontroller.js');
const servicesController = require('../controller/servicescontroller.js');
const aboutController = require('../controller/aboutcontroller.js');
const shopController = require('../controller/shopcontroller.js');
const pageTeamsController = require('../controller/pageTeamsController.js');
const newsController = require('../controller/newsController.js')
const playerController = require('../controller/playercontroller.js');

router.get('/rankings', rankingsController.getRankings);
router.get('/rankings/getscrimdata', rankingsController.getscrimdata);
router.get('/rankings/getteamsdata', rankingsController.getteamsdata);
router.get('/rankings/getplayersdata', rankingsController.getplayersdata);


router.get('/services', servicesController.getServices);

router.get('/about', aboutController.getAbout);

router.get('/shop', shopController.getShop);
router.get('/teams', pageTeamsController.getPageteams);
router.get('/news', newsController.getNews);

module.exports = router;
