/**
 * VideoController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	upload: function  (req, res) {
		console.log(req.file('video'));
		req.file('video').upload(
			{
				maxBytes: 100000000,
				dirname: require('path').resolve(sails.config.appPath, 'C:/AppServ/www/cloud/front/src/assets/videos'
			)},function (err, uploadedFiles) {
		  if (err){
				return res.send(500, err);
			}
			else{
				console.log('video');
				console.log(uploadedFiles);
				var urlFinal = uploadedFiles[0].fd.replace('/Users/fredygonzalocaptuayonovoa/OneDrive - Universidad de Los Andes/project/Cloud/cloud/source/cloud/front/src', '');
				console.log('url final');
				console.log(urlFinal);
				res.json({"ruta": urlFinal});
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
