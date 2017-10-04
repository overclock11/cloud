var mongoose = require('mongoose');
var UserModel = require('../models/users');
var Modelo = mongoose.model('Modelo');
/**
 * Funciones de Mongo
 */
exports.mcrear = function(req,res){
  let userData = new Modelo({
    administrador:{
      username:req.body.username,
      name:req.body.name,
      surname:req.body.surname,
      email:req.body.email,
      password:req.body.password,
      manager:req.body.manager,
      active:req.body.active,
      id:req.body.id,
      createdAt:new Date(),
      updatedAt:null,
      competition: new Array()
    }
  });
  userData.save(function(err,userData){
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(userData);
    }
  })
}

exports.mlogin = function(req,res){
  let datosUsuario = {
    username:req.body.username,
    password:req.body.password
  }
  Modelo.find({"administrador.username":datosUsuario.username,"administrador.password":datosUsuario.password},function(error,data){
    if (data.length>0) {
      let filtrar ={}
      filtrar.username = data[0].administrador.username;
      filtrar.name = data[0].administrador.name
      filtrar.email = data[0].administrador.email
      filtrar.id = data[0]._id;
      res.status(200).json(filtrar);
    }
    else{
      if (error) {
        res.status(401).json(error);  
      }
      else{
        res.status(401).json({"mensaje":"Usuario no valido"});  
      }      
    }
  })
}


/**
 * Funciones de Mysql
 */
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
    createdAt:new Date(),
    updatedAt:null
  };
  UserModel.insertUser(userData,function(error, data)
  {
      //si el usuario se ha insertado correctamente mostramos su info
      console.log(data);
      if(data)
      {
          res.json(200,data);
      }
      else
      {
        console.log("se fue por error",data);
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
      res.json(401);
    }
  })
}
