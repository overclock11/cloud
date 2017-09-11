var VideoModel = require('../models/video');
var config = require('../config');
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

exports.registrarVideo = function(req,res){
  let videoData ={
    "name":req.body.name,
    "url":req.body.url,
    "description":req.body.description,
    "state_id": 1,
    "competition_id":req.body.competition_id,
    "user_id":req.body.user_id,
    "show_home":0,
    "active":0,
    "notify":0,
    "url_master":null
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
