var CompetitionModel = require('../models/competition');

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
exports.getCompetitions = function(req,res){
  CompetitionModel.getAllCompetitions(function(error,data){
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
exports.registerCompetition = function(req,res){
  let datosCreacion = {
    "name":req.body.name,
    "company":req.body.company,
    "url":req.body.url,
    "image":req.body.image,
    "description":req.body.description,
    "active":1,
    "url_image_banner":req.body.url_image_banner,
    "show_home":1,
    "user_id":req.body.user_id
  }

  CompetitionModel.updateCompetition(req.body,function(error,data){

    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.registerCompetition = function(req,res){
  let datosCreacion = {
    "name":req.body.name,
    "company":req.body.company,
    "url":req.body.url,
    "image":req.body.image,
    "description":req.body.description,
    "active":1,
    "url_image_banner":req.body.url_image_banner,
    "show_home":1,
    "user_id":req.body.user_id
  }

  CompetitionModel.registerCompetition(datosCreacion,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
