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
      nombre =file.originalname;
      cb(null,file.originalname)
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
    data.forEach(function (item) {
      console.log(item.url);
        urlOrigin = item.url.replace(config.pathVideo.path, '');
        FfmpegController.convertVideoToMp4(item.id, urlOrigin, 'jlian92@gmail.com');
    });

  })
});
