
var config = require('../config');
var ip = require("ip");
var cron = require('node-cron');
var ffmpeg = require('ffmpeg');

var multer  = require('multer'),
    multerS3 = require('multer-s3'),
    fs = require('fs'),
    AWS = require('aws-sdk');

AWS.config.loadFromPath('../s3_config.json');
var s3 = new AWS.S3( { params: {Bucket: 'cloud-proyecto3'} } )

exports.upload = function(req,res){
  var nombre
  let numeroAleatorio = parseInt(Math.random()*10000);
              
  let storage = multerS3({
            s3: s3,
            bucket: 'cloud-proyecto3',
            metadata: function (req, file, cb) {
                nombre =numeroAleatorio+file.originalname;
                cb(null, { fieldName: nombre });
            },
            key: function (req, file, cb) {
                nombre =numeroAleatorio+file.originalname;
                cb(null, config.pathVideo.pathLogicOriginS3 + nombre)
            }
  })

  let cargar = multer({ storage: storage, limits: { fileSize: 100000000 } }).single('video');
  cargar(req,res,function(err){
    console.log(res);
    if (err) {
        console.log("Error al cargar en el S3");
      res.json(500,err);
       res.status(500).json(err)
    }
    else{
        console.log("Cargo correctamente en el s3");
        res.status(200).json({ruta:config.pathVideo.pathS3+nombre})
     
    }
  });
}
