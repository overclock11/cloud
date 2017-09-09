var VideoModel = require('../models/video');
var multer  = require('multer')
var ip = require("ip");
var cron = require('node-cron');


exports.getVideoByCompetition = function(req,res){
  // recibe el id de la competencia y lista todos sus videos
  VideoModel.getVideoByCompetition(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  })
}

exports.upload = function(req,res){
  var nombre;
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/videos')
    },
    filename: function (req, file, cb) {
      nombre =Date.now()+file.originalname;
      cb(null,Date.now()+file.originalname)
    }
  })
  let cargar = multer({ storage: storage, limits: { fileSize: 100000000 } }).single('video');
  cargar(req,res,function(err){
    console.log(res);
    if (err) {
      res.json(500,err);
    }
    else{
      res.json(200,{ruta:"http://localhost:3001/public/videos/"+nombre});
      //res.json(200,{ruta:"http://"+ip.address()+":3000/public/videos/"+nombre});
    }
  });
}
 
cron.schedule('* * * * *', function(){
  VideoModel.getVideoByNotProcess(function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  })
});

