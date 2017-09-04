
module.exports.convertVideoWhitFfmpeg = function(urlVideoInput,urlVideoOutput) {
	var exec = require('exec');

	exec('ffmpeg -i videos/origin/da.avi videos/render/da.mp4', function(err, out, code) {
	  if (err instanceof Error)
	    throw err;
	  process.stderr.write(err);
	  process.stdout.write(out);
	});

/* 

exec("brew doctor");
var ffmpeg = require('ffmpeg');
ESTE SACA ERROR
	try {
		var process = new ffmpeg('videos/origin/da.avi');
		process.then(function (video) {
			
			video
			.setVideoSize('640x?', true, true, '#fff')
			.setAudioCodec('libfaac')
			.setAudioChannels(2)
			.save('videos/render/your_movie.avi', function (error, file) {
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

/* ESTE NO SACA ERROR
	try {
	var process = new ffmpeg('videos/origin/da.avi');
	process.then(function (video) {
		// Callback mode
		video.fnAddWatermark('videos/origin/Worker.png', 'videos/render/your_file_video.mp4', {
			position : 'SE'
		}, function (error, file) {
			if (!error)
				console.log('New video file: ' + file);
		});
	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}


	/*
	try {
		var process = new ffmpeg('/videos/origin/da.avi');
			process.then(function (video) {
				// Callback mode
				video.fnExtractFrameToJPG('/videos/render/', {
					frame_rate : 1,
					number : 5,
					file_name : 'my_frame_%t_%s'
				}, function (error, files) {
					if (!error)
						console.log('Frames: ' + files);
				});
			}, function (err) {
				console.log('Error: ' + err);
			});
		} catch (e) {
			console.log(e.code);
			console.log(e.msg);
	}
	/*

	try {

		console.log('inicio1');
		var process = new ffmpeg('videos/origin/da.avi');
		console.log('inicio2');
		process.then(function (video) {
			// Callback mode
			console.log('inicio3');
			video.fnExtractSoundToMP3('videos/render/your_audio_file.mp3', function (error, file) {
				if (!error)
					console.log('Audio file: ' + file);
			});
			console.log('inicio4');
		}, function (err) {
			console.log('inicio15');
			console.log('Error: ' + err);
		});
		console.log('inicio6');
	} catch (e) {
		console.log('inicio7');
		console.log(e.code);
		console.log(e.msg);
	}

	try {
		var process = new ffmpeg('videos/origin/da.avi');
		process.then(function (video) {
			// Video metadata
			console.log(video.metadata);
			// FFmpeg configuration
			console.log(video.info_configuration);
		}, function (err) {
			console.log('Error: ' + err);
		});
	} catch (e) {
		console.log(e.code);
		console.log(e.msg);
	}


	try {
		var process = new ffmpeg('videos/origin/nowwmbre1.mov');
		process.then(function (video) {
			console.log('The video is ready to be processed');
		}, function (err) {
			console.log('Error: ' + err);
		});
	} catch (e) {
		console.log(e.code);
		console.log(e.msg);
	}

	/*
	try {
		var process = new ffmpeg(urlVideo);
		process.then(function (video) {
			console.log("paso1");
			video
			.save('videos/render/your_movie.mp4', function (error, file) {
				if (!error){
					console.log("paso2");
					//console.log('Video file: ' + file);
				} else {
					console.log("paso2 errot");
				}
			});

		}, function (err) {
			//console.log('Error: ' + err);
		});
	} catch (e) {
		//console.log(e.code);
		//console.log(e.msg);
	}



/*var ffmpeg = require('ffmpeg');

	console.log(urlVideo);
	try {
		console.log('videos/render/'+nameFile+'.mp4');
		var process = new ffmpeg(urlVideo);
		process.then(function (video) {
			video
			.setVideoFormat('avi')
			.setVideoCodec('libx264')
			.setAudioCodec('libfaac')
			.save('videos/render/'+nameFile+'.mp4', function (error, file) {
				if (!error)
					console.log('Video file: ' + file);
			});
		console.log('termino');
		}, function (err) {
			console.log(err);
			console.log('Error: ' + err);
		});
	} catch (e) {
		console.log(e);
		console.log(e.code);
		console.log(e.msg);
	})*/
}