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
