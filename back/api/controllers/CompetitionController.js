/**
 * CompetitionController
 *
 * @description :: Server-side logic for managing competitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	"url":function(req,res){
		Competition.find({url:req.params.id}).exec(function (err, competition){
		  if (err) {
		    return res.serverError(err);
		  }
		  return res.json(competition);
		});
	}
};
/**
module.exports = {
	"concurso-video":function(req,res){
		console.log(req.body,req.params);
		Concursos.find({"concurso_url":req.params.id}).exec(function (err, records) {
			console.log(records);
			return res.json(records);
		});
	}
};
 */
