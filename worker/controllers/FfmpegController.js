var ffmpeg = require('ffmpeg');

// ffmpeg convert function
exports.convertVideoToMp4 = function(req, res){

console.log("va a convertir el video");
	try {
		var process = new ffmpeg('public/videos/1504968625555video001.mp4');
		process.then(function (video) {
			video
			.setVideoFormat('mp4')
			.save('public/videos-render/1504968625555video001.mp4', function (error, file) {
			  if (!error)
			    console.log('Video file: ' + file);
			});
			}, function (err) {
				console.log('Error: ' + err);
			});
		} catch (e) {
			console.log(e.code);
			console.log(e.msg);
		}
	console.log("Video a convertido");
};