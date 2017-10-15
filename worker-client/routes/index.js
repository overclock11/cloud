var express = require('express');
var router = express.Router();
var VideoController = require('../controllers/VideoController');


/* Mostramos el formualario para crear usuarios nuevos */
router.get('/', function(req, res)
{
  res.render('index', { title: 'Servicio rest con nodejs, express 4 y mysql CLIENTE WORKER 3001 v6'});
});

router.route("/videos/upload").post(VideoController.upload);

router.use('/api', router);
module.exports = router;