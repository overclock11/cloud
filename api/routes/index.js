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

router.route("/usuario/crear").post(UserController.crear);
router.route("/usuario/login").post(UserController.login);


router.route("/competition/url/:id").get(CompetitionController.url);
router.route("/competition/competitions/admin/:id").get(CompetitionController.getAllCompetitionsAdmin);
router.route("/competition/competitions").get(CompetitionController.getAllCompetitionsHome);
router.route("/competition/id/:id").get(CompetitionController.getCompetitionsById);
router.route("/competition/update/:id").put(CompetitionController.updateCompetition);
router.route("/competition/crear").post(CompetitionController.registerCompetition);
router.route("/competition/eliminar/:id").delete(CompetitionController.deleteCompetition);


router.route("/videos/competition/:id").get(VideoController.getVideoByCompetition);
router.route("/videos/:id").get(VideoController.getVideoById);
router.route("/videos/upload").post(VideoController.upload);
router.route("/videos/crear").post(VideoController.registrarVideo);



router.use('/api', router);
module.exports = router;
