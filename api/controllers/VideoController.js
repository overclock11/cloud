var VideoModel = require('../models/video');
var config = require('../config');
var multer  = require('multer')
var ip = require("ip");
var mongoose = require('mongoose');
var Modelo = mongoose.model('Modelo');

/**
 * Funciones para mongo 
 */


exports.mgetVideoByCompetition = function (req,res){
  // recibe el id del concurso y lista todos sus videos
  //show_home = 1 and state_id = 1 and notify = 1  and active=0
  let condiciones ={
    "administrador.competition.id":req.params.id,
    "administrador.competition.usuario.video.show_home":1,
    "administrador.competition.usuario.video.state_id":1,
    "administrador.competition.usuario.video.notify":1,
    "administrador.competition.usuario.video.active":0
  };
  Modelo.find(condiciones,function(err,datos){
    if (err) {
      console.log(err);
      res.status(500).json(err)
    } else {
      if(datos.length>0){
        let videos = new Array();
        let competencia = datos[0].administrador.competition;        
        for(var i=0;i<competencia.length;i++){
          let usuario = competencia[i].usuario;
          for(var j=0;j<usuario.length;j++){
           let video = usuario[j].video;
           for(var k=0;k<video.length;k++){
            videos.push(video[k]);
           }
          }
        }
        res.status(200).json(videos);
      }
      else{
        res.status(318).json({"mensaje":"No existen registros"});
      }      

    }
  })

}

/**
 * Funciones para Mysql
 */
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
exports.getVideoByCompetitionAdmin = function(req,res){
  // recibe el id de la competencia y lista todos sus videos para el administrador
  VideoModel.getVideoByCompetitionAdmin(req.params,function(error,data){
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
exports.desactivarVideo = function(req,res){
  //recibe el id de del video para desactivarlo
  VideoModel.desactivarVideo(req.params,function(error,data){
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
