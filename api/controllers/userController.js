var UserModel = require('../models/users');

exports.crear =function(req,res){

  var userData = {
    username:req.body.username,
    name:req.body.name,
    surname:req.body.surname,
    email:req.body.email,
    password:req.body.password,
    manager:req.body.manager,
    active:req.body.active,
    id:req.body.id,
    createdAt:null,
    updatedAt:null
  };
  UserModel.insertUser(userData,function(error, data)
  {
      //si el usuario se ha insertado correctamente mostramos su info
      if(data && data.insertId)
      {
          res.json(200,data);
      }
      else
      {
          res.json(500,{"msg":error});
      }
  });
}
exports.login = function(req,res){
  let datosUsuario = {
    username:req.body.username,
    password:req.body.password
  }
  UserModel.getUser(datosUsuario,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  })
}
