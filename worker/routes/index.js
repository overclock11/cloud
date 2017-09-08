var express = require('express');
var router = express.Router();
var VideoController = require('../controllers/VideoController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route("/videos/upload").post(VideoController.upload);

router.use('/worker', router);
module.exports = router;
