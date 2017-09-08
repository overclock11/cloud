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

//obtenemos todos los videos
VideoModel.getVideoByCompetition = function(id,callback){
  console.log(id);
    if (connection)
    {
        var sql = 'SELECT * FROM video WHERE competition_id = ' + connection.escape(id.id)+" order by createdAt desc;";
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
VideoModel.getVideoById = function(id,callback){
  console.log(id);
    if (connection)
    {
      var sql ="select * from video as v join user as u on(v.user_id=u.id) where v.id="+ connection.escape(id.id);
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

VideoModel.insertVideo = function(videoData,callback){
    if (connection)
    {
      connection.query('INSERT INTO video SET ?', videoData, function(error, result) {
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
