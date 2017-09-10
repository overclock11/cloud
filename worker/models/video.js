var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cloud'
    }
);

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

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = VideoModel;
