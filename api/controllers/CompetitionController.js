var mongoose = require('mongoose');
var CompetitionModel = require('../models/competition');
var Modelo = mongoose.model('Modelo');

//funciones para Mongodb
exports.mgetAllCompetitionsHome = function(req,res){
  Modelo.find({"administrador.competition.active":1},function(err,datos){
    if (err) {
      console.log(err);
    } else {
      let competencias = datos.map((item)=>{
        return item.administrador.competition;
      })
      res.status(200).json(competencias)
    }
  })
}
exports.murl = function(req,res){
  Modelo.find({"administrador.competition.url":req.params.id},function(err,datos){
    if (err) {
      console.log(err);
    } else {
      console.log("24",datos);
      res.status(200).json(datos)
    }
  })
}
exports.mregisterCompetition = function(req,res){
  let competition =  new Modelo({administrador:req.body.administrador})
  competition.save(function(err, client) {
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(client);
  });  
}

exports.mgetAllCompetitionsAdmin = function(req,res){  
  Modelo.find({"administrador.id":req.params.id},function(err,datos){
    if (err) {
      console.log(err);
      res.status(500,err);
    } else {
      console.log(datos,"dats");
      res.status(200).json(datos)
    }
  })
}
exports.mgetCompetitionsById = function (req,res){
  Modelo.find({"administrador.competition._id":req.params.id},function(err,datos){
    if (err) {
      console.log(err);
      res.status(500).json(err)
    } else {
      res.status(200).json(datos);
    }
  })
}
exports.mupdateCompetition = function(req,res){
  
}

// funciones para MYSQL

exports.url = function(req,res){
  console.log(req.params);
  CompetitionModel.getByUrl(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.getAllCompetitionsAdmin = function(req,res){
  CompetitionModel.getAllCompetitionsAdmin(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.getAllCompetitionsHome = function(req,res){
  CompetitionModel.getAllCompetitionsHome(function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.getCompetitionsById = function(req,res){
  CompetitionModel.getCompetitionsById(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.updateCompetition = function(req,res){
  CompetitionModel.updateCompetition(req.params,req.body,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.deleteCompetition = function(req,res){
  CompetitionModel.deleteCompetition(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}

exports.registerCompetition = function(req,res){
  console.log(req.body);
  let datosCreacion = {
    "name":req.body.name,
    "company":req.body.company,
    "url":req.body.url,
    "image":req.body.image,
    "description":req.body.description,
    "createdAt":req.body.createdAt,
    "date_start":req.body.date_start,
    "date_end":req.body.date_end,
    "active":1,
    "url_image_banner":req.body.url_image_banner,
    "show_home":1,
    "user_id":req.body.user_id
  }
  console.log(datosCreacion);

  CompetitionModel.registerCompetition(datosCreacion,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
