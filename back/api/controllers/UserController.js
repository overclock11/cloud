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
	}
};
