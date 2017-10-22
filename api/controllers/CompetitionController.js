var mongoose = require('mongoose');
var Modelo = mongoose.model('Modelo');
var CompetitionModel = require('../models/competition');
const uuidv4 = require('uuid/v4');


//funciones para Mongodb despliegue D
exports.mgetAllCompetitionsHome = function(req,res){
  Modelo.find({"administrador.competition.active":1},function(err,datos){
    if (err) {
      console.log(err);
    } else {
      var element =[];
      let competencias = datos.map((item,index)=>{
        return item.administrador.competition;
      })
      for (var i = 0; i < competencias.length; i++) {
        element = element.concat(competencias[i]);
      }
      res.status(200).json(element)
    }
  })
};
exports.murl = function(req,res){
    let condiciones ={
        "administrador.competition.url":req.params.id
    };
  Modelo.find(condiciones,function(err,datos){
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      let datosFormateados = new Array();
      let tam = datos[0].administrador.competition;
      let competitionId = datos[0].administrador.competition[0].id;
      for (var i = 0; i < tam.length; i++) {
        var usuario =datos[0].administrador.competition[i].usuario;
        if(datos[0].administrador.competition[i].url===req.params.id){
            for(var j=0;j<usuario.length;j++){
                let videos = usuario[j];
                for(var k=0;k<videos.video.length;k++){
                    if(videos.video[k].active!==1 && videos.video[k].show_home===1 ){
                        let temp ={
                            "name":videos.video[k].name,
                            "url":videos.video[k].url,
                            "description":videos.video[k].description,
                            "notify":videos.video[k].notify,
                            "active":videos.video[k].active,
                            "id":videos.video[k].id,
                            "createdAt":videos.video[k].createdAt,
                            "updatedAt":videos.video[k].updatedAt,
                            "url_master":videos.video[k].url_master,
                            "show_home":videos.video[k].show_home,
                            "state_id":videos.video[k].state_id,
                            "user_id":usuario.id,
                            "competitionId":competitionId
                        }
                        datosFormateados.push(temp);
                    }
                }
            }
        }
      }
      if(datosFormateados.length>0){
          res.status(200).json(datosFormateados);
      }
      else{
          datosFormateados.push({
            "competitionId":competitionId
          });
          res.status(200).json(datosFormateados);
      }

    }
  })
};
exports.mregisterCompetition = function(req,res){
  req.body.id = uuidv4();
  req.body.active=1;
  req.body.show_home=1;
  req.body.image="";
  console.log(req.body.id);
  Modelo.find({"administrador.id":req.body.user_id},function(err,datos){
    if (err) {
      console.log(err);
      res.status(500,err);
    } else {
      if(datos.length>0){
        datos[0].administrador.competition.push(req.body);
        console.log(datos[0]);
        Modelo.update({"_id":datos[0]._id}, datos[0],function(err,datos){
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(datos);
          }
        })
      }
      else{
        console.log(datos,"no tiene nada?")
        res.status(200).json(datos);
      }
    }  
  })
}

exports.mgetAllCompetitionsAdmin = function(req,res){  
  Modelo.find({"administrador.id":req.params.id},function(err,datos){
    if (err) {
      console.log(err);
      res.status(500,err);
    } else {
      if (datos.length>0) {
        res.status(200).json(datos[0].administrador.competition);        
      } else {
        console.log(datos);
        res.status(401).json({"mensaje":"Administrador no tiene concursos"});
      }
    }
  })
}
exports.mgetCompetitionsById = function (req,res){
  Modelo.find({"administrador.competition.id":req.params.id},function(err,datos){
    if (err) {
      console.log(err);
      res.status(500).json(err)
    } else {
      let concurso = datos[0].administrador.competition.filter((item)=>{
        if(item.id==req.params.id){
          return item;
        }
      });
      res.status(200).json(concurso);
    }
  })
}
exports.mupdateCompetition = function(req,res){
  //console.log(req.body)
  Modelo.find({"administrador.competition.id":req.params.id},function(err,datos){
    if (err) {
      console.log(err);
      res.status(500).json(err)
    } else {
      for(var i=0;i<datos[0].administrador.competition.length;i++){
        console.log(datos[0].administrador.competition[i].id);
        if(datos[0].administrador.competition[i].id==req.params.id){
          datos[0].administrador.competition[i] = req.body;
        }
      }
      Modelo.update({"_id":datos[0]._id}, datos[0],function(err,datos){
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(err);
        }
      });
    }
  })
}

exports.mdeleteCompetition = function(req,res){
  console.log("elminando ",req.params.id);
  Modelo.remove({"administrador.competition.id":req.params.id},function(err){
    if (err) {
      console.log("error",err);
      res.status(500).json(err)
    } else {
      console.log("ok");
      res.status(200).json({"status":200});
    }
  })
}


// funciones para MYSQL despliegue C
exports.url = function(req,res){
  console.log(req.params);
  CompetitionModel.getByUrl(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.getAllCompetitionsAdmin = function(req,res){
  CompetitionModel.getAllCompetitionsAdmin(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.getAllCompetitionsHome = function(req,res){
  CompetitionModel.getAllCompetitionsHome(function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.getCompetitionsById = function(req,res){
  CompetitionModel.getCompetitionsById(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.updateCompetition = function(req,res){
  CompetitionModel.updateCompetition(req.params,req.body,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
exports.deleteCompetition = function(req,res){
  CompetitionModel.deleteCompetition(req.params,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}

exports.registerCompetition = function(req,res){
  console.log(req.body);
  let datosCreacion = {
    "name":req.body.name,
    "company":req.body.company,
    "url":req.body.url,
    "image":req.body.image,
    "description":req.body.description,
    "createdAt":req.body.createdAt,
    "date_start":req.body.date_start,
    "date_end":req.body.date_end,
    "active":1,
    "url_image_banner":req.body.url_image_banner,
    "show_home":1,
    "user_id":req.body.user_id
  }
  console.log(datosCreacion);

  CompetitionModel.registerCompetition(datosCreacion,function(error,data){
    if (data) {
      res.json(200,data);
    }
    else{
      res.json(500,error);
    }
  });
}
