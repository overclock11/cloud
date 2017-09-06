var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');
var CompetitionController = require('../controllers/CompetitionController');
var VideoController = require('../controllers/VideoController');


/* Mostramos el formualario para crear usuarios nuevos */
router.get('/', function(req, res)
{
  res.render('index', { title: 'Servicio rest con nodejs, express 4 y mysql'});
});

router.route("/crear").post(UserController.crear);
router.route("/login").post(UserController.login);


router.route("/url/:id").get(CompetitionController.url);
router.route("/competitions").get(CompetitionController.getCompetitions);
router.route("/competitions").get(CompetitionController.getCompetitions);


router.route("/videos/competition/:id").get(VideoController.getVideoByCompetition);




router.use('/api', router);

module.exports = router;
