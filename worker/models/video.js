var config = require('../config');

var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(config.databases);


//validar que conecto con rds
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });
  

//creamos un objeto para ir almacenando todo lo que necesitemos
var VideoModel = {};

//obtenemos todos los videos sin procesar
VideoModel.getVideoByNotProcess = function(callback){
    if (connection)
    {
        var sql ="SELECT u.email as email, v.name as name, v.url as url, v.description as description,v.notify as notify, v.active as active, v.id as id, v.createdAt as createdAt, v.updatedAt as updatedAt, v.url_master as url_master, v.show_home as show_home, v.competition_id as competition_id, v.state_id as state_id, v.user_id as user_id from video as v join user as u on(v.user_id=u.id) WHERE url_master is null and show_home = 0 and state_id = 1 and notify = 0 order by RAND() LIMIT 2;";
        connection.query(sql, function(error, row)
        {
            if(error)
            {
                callback(error, null);
            }
            else
            {
                callback(null, row);
            }
        });
    }
}

//validadmos si el video se esta procesando por algun worker
VideoModel.getStateNotifite = function(id, callback){
    if (connection)
    {
        var sql ="SELECT  v.id from video as v WHERE id = " + id + " and url_master is null and show_home = 0 and state_id = 1 and notify = 0 limit 1";
        connection.query(sql, function(error, row)
        {
            if(error)
            {
                callback(error, null);
            }
            else
            {
                callback(null, row);
            }
        });
    }
}

VideoModel.updateConvertVideo = function(id,url_master,callback){
    if (connection)
    {
        var sql = "UPDATE video SET url_master = '"+ url_master +"', show_home = 1, notify = 1 where id = " + id + ";";
        console.log(sql);
        connection.query(sql, function(error, result)
        {
            if(error)
            {
                callback(error, result);
            }
            else
            {
                callback(null, result);
            }
        });
    }
}

VideoModel.updateNotifyConvertVideo = function(id,callback){
    if (connection)
    {
        var sql = "UPDATE video SET notify = 1 where id = " + id + ";";
        console.log(sql);
        connection.query(sql, function(error, result)
        {
            if(error)
            {
                callback(error, result);
            }
            else
            {
                callback(null, result);
            }
        });
    }
}


//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = VideoModel;
