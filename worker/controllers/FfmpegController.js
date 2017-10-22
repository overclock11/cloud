var VideoModel = require('../models/video');
var EmailController = require('../controllers/EmailController');
var ffmpeg = require('ffmpeg');
var config = require('../config');
var S3FS = require('s3fs');
var fs = require('fs'),
	http = require('http'),
    path = require('path'),
    Q = require('q');

var AWS = require('aws-sdk');
AWS.config.loadFromPath('./s3_config.json');
var s3 = new AWS.S3( { params: {Bucket: 'cloud-proyecto3/videos-render'} } );



// ffmpeg convert function
exports.convertVideoToMp4 = function(message){



	console.log("entro al convert");
	urlOrigin = message.url.replace(config.pathVideo.pathS3, '');
    descargarVideo(urlOrigin, message);
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
	  }).on('finish', function () {
			deferred.resolve(filepath)
			console.log("entro al envio");
		    convertVideo(urlOrigin,'captuayonovoafredy@gmail.com')
	  });
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
  				

  				uploadToS3(file, urlOrigin, function (err, data) {
			        if (err) {
			            console.error(err);
			        }
			        console.error("File uploaded to S3: ");
			        EmailController.sendEmail(emailUser, config.pathVideo.pathRender+urlOrigin);
			    });

  				
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
				uploadToS3(urlOrigin, urlOrigin, function (err, data) {
			        if (err) {
			            console.error(err);
			        }
			        console.error("File uploaded to S3: ");
			        EmailController.sendEmail(emailUser, config.pathVideo.pathRender+urlOrigin);
			    });  				
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

function uploadToS3(urlOrigin, destFileName, callback) {
    s3
        .upload({
            ACL: 'public-read', 
            Body: fs.createReadStream(config.pathVideo.pathLogicConvert+urlOrigin), 
            Key: destFileName.toString(),
            ContentType: 'application/octet-stream' // force download if it's accessed as a top location
        })
        // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html#httpUploadProgress-event
        .on('httpUploadProgress', function(evt) { console.log(evt); })
        // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html#send-property
        .send(callback);
}