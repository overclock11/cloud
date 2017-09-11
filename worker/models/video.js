var config = require('../config');

var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(config.databases);

//creamos un objeto para ir almacenando todo lo que necesitemos
var VideoModel = {};

//obtenemos todos los videos sin procesar
VideoModel.getVideoByNotProcess = function(callback){
    if (connection)
    {
        var sql = "SELECT * FROM video WHERE url_master is null and show_home = 0 and state_id = 1 and notify = 0 order by createdAt desc;"
        connection.query(sql, function(error, row)
        {
            if(error)
            {
                callback(error, result);
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

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = VideoModel;
