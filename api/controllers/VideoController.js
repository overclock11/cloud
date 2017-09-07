var VideoModel = require('../models/video');
var multer  = require('multer')
var ip = require("ip");



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
exports.getVideoById = function(req,res){
  // recibe el id de del video
  VideoModel.getVideoById(req.params,function(error,data){
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
      res.json(200,{ruta:"http://"+ip.address()+":3000/public/videos/"+nombre});
    }
  });
}

exports.registrarVideo = function(req,res){
  let videoData ={
    "name":req.body.name,
    "url":req.body.url,
    "description":req.body.description,
    "state_id":req.body.state_id,
    "competition_id":req.body.competition_id,
    "user_id":req.body.user_id,
  }
  VideoModel.insertVideo(videoData,function(error, data)
  {
      //si el usuario se ha insertado correctamente mostramos su info
      if(data && data.insertId)
      {
          res.json(200,data);
      }
      else
      {
          res.json(500,{"msg":error});
      }
  });
}
