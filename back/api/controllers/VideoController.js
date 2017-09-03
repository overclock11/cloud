/**
 * VideoController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	upload: function  (req, res) {
		console.log(req.file('video'));
		req.file('video').upload({maxBytes: 100000000},function (err, uploadedFiles) {
		  if (err){
				return res.send(500, err);
			}
			else{
				res.json({"ruta": uploadedFiles[0].fd});
			}
		});
	},
	"registrar-participante":function (req,res){
		Video.create(req.body, function userCreated(err, video) {
			if (err) return res.serverError(err);
			res.json(video);
		});
	}
};

function crearRegistro(ruta,datos){
	console.log(ruta,datos);
	// Video.create(datos, function userCreated(err, user) {
	// 	if (err) return res.serverError(err);
	// 	res.json(user);
	// });
}
