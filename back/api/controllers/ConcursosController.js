/**
 * ConcursosController
 *
 * @description :: Server-side logic for managing concursos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	"concurso-video":function(req,res){
		console.log(req.body,req.params);
		Concursos.find({"concurso_url":req.params.id}).exec(function (err, records) {
			console.log(records);
			return res.json(records);
		});
	}
};
