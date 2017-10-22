var VideoModel = require('../models/video');
var FfmpegController = require('../controllers/FfmpegController');
var config = require('../config');
var multer  = require('multer')
var ip = require("ip");
var cron = require('node-cron');
var ffmpeg = require('ffmpeg');

cron.schedule('*/1 * * * *', function(){
  console.log("cron ejecutandose");
  VideoModel.getVideoByNotProcess(function(error,data){
    if (error) {
      console.log(error);
    }
    else{
      data.forEach(function (item) {
        console.log("entro al for escenarioC");
        console.log(item.id);

                  urlOrigin = item.url.replace(config.pathVideo.path, '');
                  console.log(item.id, urlOrigin, item.email);
                  FfmpegController.convertVideoToMp4(item.id, urlOrigin, item.email);
        
      });
    } 
  });
});