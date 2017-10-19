var mongoose = require('mongoose');
var UserModel = require('../models/users');
var Modelo = mongoose.model('Modelo');
const uuidv4 = require('uuid/v4');

var aws= require('aws-sdk');
var elasticache = new aws.ElastiCache();

/**
 * Funciones de Mongo
 */
exports.mcrear = function(req,res){
  console.log(req.body.competition_id);
  if(req.body.competition_id){
    //si existe quiere decir que esta cargando un video un usuario

    // validar si el usuario existe por medio del correo
      Modelo.find({"administrador.competition.id":req.body.competition_id},function(error,concurso){
          var usuarioId;
          var competitionPos;
          var existe = false;
          let tam = concurso[0].administrador.competition.length;
          for (var i = 0; i < tam; i++) {
              var usuario =concurso[0].administrador.competition[i].usuario;
              if(concurso[0].administrador.competition[i].id===req.body.competition_id){
                  for(var j=0;j<usuario.length;j++){
                      competitionPos = i;
                      if(usuario[j].email===req.body.email){
                          // el usuario existe
                          usuarioId=usuario[j];
                          existe=true;
                      }
                  }
              }
          }
          //si esta responde el ID del usuario al front
          if(existe){
            //si existe responde el usuario
              res.status(200).json(usuarioId)
          }
          else{
            //si no existe lo crea y responde el id
              let nuevousuario = req.body;
              nuevousuario.id = uuidv4();
              nuevousuario.video = new Array();
              concurso[0].administrador.competition[competitionPos].usuario.push(nuevousuario);
              Modelo.update({"_id":concurso[0]._id}, concurso[0],function(err,datos){
                  if (err) {
                      res.status(500).json(err);
                  } else {
                      res.status(200).json(nuevousuario);
                  }
              })
          }
      })
  }
  else{
    //NO se esta cargando un video, SE ESTA CREANDO UN ADMINISTRADOR
      let userData = new Modelo({
          administrador:{
              username:req.body.username,
              name:req.body.name,
              surname:req.body.surname,
              email:req.body.email,
              password:req.body.password,
              manager:req.body.manager,
              active:req.body.active,
              id:uuidv4(),
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
}

exports.mlogin = function(req,res){
  let datosUsuario = {
    username:req.body.username,
    password:req.body.password
  }
  Modelo.find({"administrador.username":datosUsuario.username,"administrador.password":datosUsuario.password},function(error,data){
    console.log(data.length);
    if (data.length>0) {
      let filtrar ={}
      filtrar.username = data[0].administrador.username;
      filtrar.name = data[0].administrador.name
      filtrar.email = data[0].administrador.email
      filtrar.id = data[0].administrador.id;
      let datos = new Array();
      datos.push(filtrar);

      // cargar a redis aqui !
        elasticache.addTagsToResource(datos, function (err, data) {
            if (err) {
                console.log(err, err.stack)
                res.status(200).json(datos);
            }
            else{
                console.log(data);
                res.status(200).json(datos);
            }
        });
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
