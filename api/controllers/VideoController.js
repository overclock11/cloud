var VideoModel = require('../models/video');
var config = require('../config');
var ip = require("ip");
var mongoose = require('mongoose');
var Modelo = mongoose.model('Modelo');
var aws= require('aws-sdk');
const uuidv4 = require('uuid/v4');
/**
 * Funciones para mongo 
 */

aws.config.loadFromPath("../sqsconfig.json");

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

};

exports.mgetVideoByCompetitionAdmin = function(req,res){

    // recibe el id del concurso y lista todos sus videos
    let condiciones ={
        "administrador.competition.id":req.params.id
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
                    if(datos[0].administrador.competition[i].id===req.params.id){
                        for(var j=0;j<usuario.length;j++){
                            let video = usuario[j].video;
                            for(var k=0;k<video.length;k++){
                                videos.push(video[k]);
                            }
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



exports.mgetVideoById = function(req,res){

    Modelo.find({"administrador.competition.usuario.video.id":req.params.id},function(err,datos){
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

exports.mdesactivarVideo = function(req,res){
    //active=1, show_home = 1
    Modelo.find({"administrador.competition.usuario.video.id":req.params.id},function(err,datos){
        if (err) {
            console.log(err);
            res.status(500).json(err)
        } else {
            if(datos.length>0){
                let videos = new Array();
                for(var i=0;i<datos[0].administrador.competition.length;i++){
                    for(var j=0;j<datos[0].administrador.competition[i].usuario.length;j++){
                        for(var k=0;k<datos[0].administrador.competition[i].usuario[j].video.length;k++){
                            console.log("-------> ",datos[0].administrador.competition[i].usuario[j].video[k]);
                            if(datos[0].administrador.competition[i].usuario[j].video[k].id===req.params.id){
                               datos[0].administrador.competition[i].usuario[j].video[k].active=1;
                               datos[0].administrador.competition[i].usuario[j].video[k].show_home=2;
                           }
                        }
                    }
                }
            }
            Modelo.update({"_id":datos[0]._id}, datos[0],function(err,datos){
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(err);
                }
            });
        }
    })
};


exports.mregistrarVideo = function(req,res){
    // recibe el id del concurso y lista todos sus videos
    // crea la cola en sqs

    var sqs = new aws.SQS();
    var mensajeCola;

    let condiciones ={
        "administrador.competition.id":req.body.competition_id
    };
    Modelo.find(condiciones,function(err,datos){
        req.body.id = uuidv4();
        if (err) {
            console.log(err);
            res.status(500).json(err)
        } else {
            if(datos.length>0){
                let videos = new Array();
                for(var i=0;i<datos[0].administrador.competition.length;i++){
                    if(datos[0].administrador.competition[i].id===req.body.competition_id){
                        for(var j=0;j<datos[0].administrador.competition[i].usuario.length;j++){
                            if(datos[0].administrador.competition[i].usuario[j].id===req.body.user_id){
                                datos[0].administrador.competition[i].usuario[j].video.push({
                                    "name":req.body.name,
                                    "url":req.body.url,
                                    "description":req.body.description,
                                    "state_id": 1,
                                    "competition_id":req.body.competition_id,
                                    "user_id":req.body.user_id,
                                    "show_home":0,
                                    "active":0,
                                    "notify":0,
                                    "url_master":null,
                                    "createdAt":new Date(),
                                    "id":req.body.id
                                });
                                mensajeCola = {
                                    "name":req.body.name,
                                    "url":req.body.url,
                                    "description":req.body.description,
                                    "state_id": 1,
                                    "competition_id":req.body.competition_id,
                                    "user_id":req.body.user_id,
                                    "show_home":0,
                                    "active":0,
                                    "notify":0,
                                    "url_master":null,
                                    "createdAt":new Date(),
                                    "id":req.body.id
                                }
                            }
                        }
                    }
                }
            }
            Modelo.update({"_id":datos[0]._id}, datos[0],function(err,datos){
                if (err) {
                    res.status(500).json(err);
                } else {
                    console.log(typeof JSON.stringify(mensajeCola));
                    var params = {
                        MessageBody: JSON.stringify(mensajeCola),
                        QueueUrl: config.configSqs.url,
                        DelaySeconds: 0,
                        MessageGroupId:"proyecto3"
                    };

                    sqs.sendMessage(params, function(err, data) {
                        if(err) {
                            console.log(err);
                            res.send(err);
                        }
                        else {
                            console.log(data);
                            res.status(200).json(datos);
                        }
                    });
                }
            });
        }
    })
};
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
