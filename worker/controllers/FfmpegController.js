var EmailController = require('../controllers/EmailController');
var ffmpeg = require('ffmpeg');
var config = require('../config');

// ffmpeg convert function
exports.convertVideoToMp4 = function(id, urlOrigin, emailUser){

console.log("va a convertir el video"+urlOrigin);
	try {
		var process = new ffmpeg(config.pathVideo.pathLogicOrigin+urlOrigin);
		process.then(function (video) {
			video
			.setVideoFormat('mp4')
			.save(config.pathVideo.pathLogicConvert+urlOrigin, function (error, file) {
			  if (!error)
			    console.log('Video file: ' + file);
				console.log("Video a convertido");
				urlOrigin = urlOrigin.replace('.avi', '.mp4');
				urlOrigin = urlOrigin.replace('.mov', '.mp4');
				urlOrigin = urlOrigin.replace('.AVI', '.mp4');
				urlOrigin = urlOrigin.replace('.MOV', '.mp4');
				EmailController.sendEmail(id, emailUser, config.pathVideo.pathRender+urlOrigin);
			});
			}, function (err) {
				console.log('Error: ' + err);
			});
		} catch (e) {
			console.log(e.code);
			console.log(e.msg);
		}

};