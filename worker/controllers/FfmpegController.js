var VideoModel = require('../models/video');
var EmailController = require('../controllers/EmailController');
var ffmpeg = require('ffmpeg');
var config = require('../config');

// ffmpeg convert function
exports.convertVideoToMp4 = function(id, urlOrigin, emailUser){


VideoModel.getStateNotifite(id, function(error,data_validate) {
           if(data_validate) {
            console.log(data_validate);
             data_validate.forEach(function (item_validate) {
              console.log("entro al segundo for escenarioC");
              console.log(item_validate.id);
              if (item_validate.id == id) {
                  

                  
if (urlOrigin.indexOf(".mp4") > 0) {


console.log("va a convertir el video"+urlOrigin);


VideoModel.updateNotifyConvertVideo(id, function(error, data_update_notify) {
	if(data_update_notify) {
  console.log("video actualizado porque entro al convert mp4 " + id);
	} else {
		console.log("Error update notify");
	}
});


	try {
		var process = new ffmpeg(config.pathVideo.pathLogicOrigin+urlOrigin);
		process.then(function (video) {
      		video
			.save(config.pathVideo.pathLogicConvert+urlOrigin, function (error, file) {
        console.log(error);
			  if (error){
          console.log(error);
        }
        else {
          console.log('Video file: ' + file);
  				console.log("Video a convertido");
  				EmailController.sendEmail(id, emailUser, config.pathVideo.pathRender+urlOrigin);
        }
			});
			}, function (err) {
				console.log('Error: ' + err);
			});
		} catch (e) {
			console.log(e.code);
			console.log(e.msg);
		}
}  else {
try {

VideoModel.updateNotifyConvertVideo(id, function(error, data_update_notify) {
	if(data_update_notify) {
  console.log("video actualizado porque entro al convert" + id);
	} else {
		console.log("Error update notify");
	}
});

		var process = new ffmpeg(config.pathVideo.pathLogicOrigin+urlOrigin);
		process.then(function (video) {
      urlOrigin = urlOrigin.replace('.avi', '.mp4');
      urlOrigin = urlOrigin.replace('.mov', '.mp4');
      urlOrigin = urlOrigin.replace('.AVI', '.mp4');
      urlOrigin = urlOrigin.replace('.MOV', '.mp4');
			video
			.setVideoFormat('mp4')
			.save(config.pathVideo.pathLogicConvert+urlOrigin, function (error, file) {
        console.log(error);
			  if (error){
          console.log(error);
        }
        else {
          console.log('Video file: ' + file);
  				console.log("Video a convertido");
  				EmailController.sendEmail(id, emailUser, config.pathVideo.pathRender+urlOrigin);
        }
			});
			}, function (err) {
				console.log('Error: ' + err);
			});
		} catch (e) {
			console.log(e.code);
			console.log(e.msg);
		}
	}






                }
              });
            } else {
               console.log("video ya tomado");
            }
        });






};

