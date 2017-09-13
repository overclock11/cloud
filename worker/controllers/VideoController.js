var VideoModel = require('../models/video');
var FfmpegController = require('../controllers/FfmpegController');
var config = require('../config');
var multer  = require('multer')
var ip = require("ip");
var cron = require('node-cron');
var ffmpeg = require('ffmpeg');


exports.upload = function(req,res){
  var nombre;
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, config.pathVideo.pathLogic)
    },
    filename: function (req, file, cb) {
      let numeroAleatorio = parseInt(Math.random()*10000);
      nombre =numeroAleatorio+file.originalname;
      cb(null,numeroAleatorio+file.originalname)
    }
  })
  let cargar = multer({ storage: storage, limits: { fileSize: 100000000 } }).single('video');
  cargar(req,res,function(err){
    console.log(res);
    if (err) {
      res.json(500,err);
    }
    else{
      res.json(200,{ruta:config.pathVideo.path+nombre});
    }
  });
}

cron.schedule('*/2 * * * *', function(){
  console.log("cron ejecutandose");
  VideoModel.getVideoByNotProcess(function(error,data){
    if (error) {
      console.log(error);
    }
    else{
      data.forEach(function (item) {
          urlOrigin = item.url.replace(config.pathVideo.path, '');
          console.log(item.id, urlOrigin, item.email);
          FfmpegController.convertVideoToMp4(item.id, urlOrigin, item.email);
      });
    }


  })
});
