var express = require('express');
var router = express.Router();
var VideoController = require('../controllers/VideoController');


/* Mostramos el formualario para crear usuarios nuevos */
router.get('/', function(req, res)
{
  res.render('index', { title: 'Servicio rest con nodejs, express 4 y mysql CLIENTE WORKER 3001 v3'});
});

router.route("/videos/upload").post(VideoController.upload);

router.use('/api', router);
module.exports = router;


sudo env 
PATH=$PATH:/home/ec2-user/.nvm/versions/node/v6.11.2/bin 
/home/ec2-user/.nvm/versions/node/v6.11.2/lib/node_modules/pm2/bin/pm2 startup systemv 
-u ec2-user 
--hp /home/ec2-user


      cd cloud/worker/bin/
  868  sudo pm2 startup systemd
  869  sudo su pm2 startup systemd
  870  su pm2 startup systemd
  871  su - pm2 startup systemd
  872  m2 startup systemd
  873  pm2 startup systemd
  874  pm2 startup systemv
