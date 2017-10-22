var VideoModel = require('../models/video');
var EmailController = require('../controllers/EmailController');
var ffmpeg = require('ffmpeg');
var config = require('../config');
var multer  = require('multer'), multerS3 = require('multer-s3'), AWS = require('aws-sdk');
var fs = require('fs'),
	http = require('http'),
    path = require('path'),
    Q = require('q');



AWS.config.loadFromPath('./s3_config.json');
var s3 = new AWS.S3( { params: {Bucket: 'cloud-proyecto3'} } )

// ffmpeg convert function
exports.convertVideoToMp4 = function(message){
	console.log("entro al convert");
	urlOrigin = message.url.replace(config.pathVideo.pathS3, '');
    originvideo = descargarVideo(urlOrigin, message);
    console.log(originvideo);

    if (originvideo != null) {
    	console.log("entro al envio");
    	convertVideo(urlOrigin,'captuayonovoafredy@gmail.com')
    }

    console.log("salio al convert");
	
};


 function descargarVideo(urlOrigin, message) {
	console.log("entro ala descarga");
	var params = { Bucket: 'cloud-proyecto3/videos', Key: urlOrigin };
	//var file = require('fs').createWriteStream('/public/' + urlOrigin);
	//s3.getObject(params).createReadStream().pipe(file);
	var filepath = config.pathVideo.pathLogic + urlOrigin;	
	var fileStream = fs.createWriteStream(filepath),
      deferred = Q.defer();
	  fileStream.on('open', function () {
	    http.get(message.url, function (res) {
	      res.on('error', function (err) {
	        deferred.reject(err);
	      });
	      res.pipe(fileStream);
	    });
	  }).on('error', function (err) {
	  	console.log(err);
	    deferred.reject(err);
	    return null;
	  }).on('finish', function () {
	  	deferred.resolve(filepath)
	  });
	  return filepath;
};


// ffmpeg convert function
function convertVideo(urlOrigin, emailUser){



if (urlOrigin.indexOf(".mp4") > 0) {

console.log("va a convertir el video"+urlOrigin);
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
  				//uploadVideo(urlOrigin);
  				EmailController.sendEmail(emailUser, config.pathVideo.pathRender+urlOrigin);
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
	console.log("va a convertir el video no mp4"+urlOrigin);
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
				//uploadVideo(urlOrigin);
  				EmailController.sendEmail(emailUser, config.pathVideo.pathRender+urlOrigin);
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

};


 function uploadVideo(urlOrigin) {
 	console.log("Cargo correctamente en el s3 arranco");
	fs.readFile(config.pathVideo.pathLogicConvert+urlOrigin, function (err, data) {
        if (err) throw err; // Something went wrong!
        var s3bucket = new AWS.S3({params: {Bucket: 'mybucketname'}});
        let storage = multerS3({
            s3: s3,
            bucket: 'cloud-proyecto3',
            metadata: function (req, data, cb) {
                cb(null, { fieldName: urlOrigin });
            },
            key: function (req, data, cb) {
                cb(null, config.pathVideo.pathLogicConvertS3 + urlOrigin)
            }
		  })

		  let cargar = multer({ storage: storage, limits: { fileSize: 100000000 } });
		    if (err) {
		        console.log("Error al cargar en el S3");
		    }
		    else{
		        console.log("Cargo correctamente en el s3");
		    }
    });
};



