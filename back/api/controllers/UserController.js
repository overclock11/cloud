/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear:function(req,res){
		console.log(req.body);
		User.create(req.body, function userCreated(err, user) {
			if (err) return res.serverError(err);
			res.json(user.id);
		});
	},
	login:function(req,res){
		User.find({username:req.body.username,password:req.body.password}).exec(function(error,usuario){
			if (error) {
				res.json(500, {err:error});
			}
			else if (usuario.length==0) {
				res.json(401, {err: 'Por favor verifica tus datos de acceso'});
			}
			else{
				let respuesta = usuario.map((datos)=>{
					return {
						"username":datos.username ,
		        "name": datos.name,
		        "surname": datos.surname,
		        "email": datos.email,
		        "id": datos.id,
					}
				})
				res.json(200,respuesta);
			}
		})
	}
};
