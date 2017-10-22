var VideoModel = require('../models/video');
var FfmpegController = require('../controllers/FfmpegController');
var config = require('../config');
var multer  = require('multer')
var ip = require("ip");
var cron = require('node-cron');
var ffmpeg = require('ffmpeg');
var aws= require('aws-sdk');
var fs = require('fs');
var mongoose = require('mongoose');
var Modelo = mongoose.model('Modelo');


aws.config.loadFromPath("./sqsconfig.json");

var receipt  = "";

cron.schedule('*/1 * * * *', function(){
  console.log("cron ejecutandose");

  var sqs = new aws.SQS();

  var params = {
      QueueUrl: config.configSqs.url,
      MaxNumberOfMessages: 1,
      WaitTimeSeconds: 20
  };

  sqs.receiveMessage(params, function(err, data) {
      if(err) {
          console.log(err);
      }
      else {
          if (data.Messages) {
              // Get the first message (should be the only one since we said to only get one above)
              var message = data.Messages[0];
              body = JSON.parse(message.Body);
              // Now this is where you'd do something with this message
              convertVideo(body);  // whatever you wanna do
              // Clean up after yourself... delete this message from the queue, so it's not executed again
              //removeFromQueue(message);  // We'll do this in a second
           }
      }
  });
});

var convertVideo = function(message) {
            
            FfmpegController.convertVideoToMp4(message);
          
};

var removeFromQueue = function(message) {
    var sqs = new aws.SQS();
    
    var params = {
        QueueUrl: config.configSqs.url,
        ReceiptHandle: message.ReceiptHandle
    };
    
    sqs.deleteMessage(params, function(err, data) {
        if(err) {
            console.log(err)
        } 
        else {
            console.log(data)
        } 
    });
};



