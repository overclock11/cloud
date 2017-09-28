var config = require('../config');

var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(config.databases);

//validar que conecto a rds
/*connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
});*/
  

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
competitionModel.getCompetitionsById = function(competitionId,callback)
{
    if (connection)
    {
        var sql = 'SELECT * FROM competition WHERE id = ' + connection.escape(competitionId.id);
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

competitionModel.getAllCompetitionsAdmin = function(adminId,callback){
  if (connection)
  {
      var sql = 'SELECT * FROM competition where user_id=?';
      connection.query(sql,[adminId.id], function(error, row)
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

competitionModel.getAllCompetitionsHome = function(callback){
  if (connection)
  {
      var sql = 'SELECT * FROM competition where active=1';
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

competitionModel.deleteCompetition = function(id,callback){
  if (connection)
  {
      connection.query("update competition set active=0 where id=?",[id.id], function(error, row)
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

competitionModel.updateCompetition = function(id,datos,callback){
  if (connection)
  {
      connection.query('update competition set name= ?, company=? ,url=? , url_image_banner=?, description=? where id=?',
      [datos.name,datos.company,datos.url,datos.url_image_banner,datos.description,id.id],
      function(error, row)
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
competitionModel.registerCompetition = function(datosCreacion,callback){
  if (connection)
  {
    connection.query('INSERT INTO competition SET ?', datosCreacion, function(error, result) {
      if(error)
      {
          callback(error, result);
      }
      else
      {
          callback(error, result);
      }
    });
  }
}

module.exports = competitionModel;
