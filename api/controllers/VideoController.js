var VideoModel = require('../models/video');

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
