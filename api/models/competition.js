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
var competitionModel = {};

//obtenemos todos los usuarios
competitionModel.url = function(callback)
{
    if (connection)
    {
        connection.query('SELECT * FROM user ORDER BY id', function(error, rows) {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
            }
        });
    }
}

//obtiene los concursos por url
competitionModel.getByUrl = function(url,callback)
{
  console.log(url);
    if (connection)
    {
        var sql = 'SELECT * FROM competition WHERE url = ' + connection.escape(url.id);
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
competitionModel.getAllCompetitions = function(callback){
  if (connection)
  {
      var sql = 'SELECT * FROM competition';
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

module.exports = competitionModel;
