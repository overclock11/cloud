var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'administrador',
        database: 'cloud'
    }
);

//creamos un objeto para ir almacenando todo lo que necesitemos
var VideoModel = {};

//obtenemos todos los videos
VideoModel.getVideoByCompetition = function(id,callback){
  console.log(id);
    if (connection)
    {
        var sql = 'SELECT * FROM video WHERE competition_id = ' + connection.escape(id.id);
        connection.query(sql, function(error, row)
        {
            if(error)
            {
                throw error;
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
