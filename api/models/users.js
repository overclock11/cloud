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
var userModel = {};

//obtenemos todos los usuarios
userModel.getUsers = function(callback)
{
    if (connection)
    {
        connection.query('SELECT * FROM user ORDER BY id', function(error, rows) {
            if(error)
            {
                callback(error, result);
            }
            else
            {
                callback(null, rows);
            }
        });
    }
}

//obtenemos un usuario por su usuarioi y contraseña
userModel.getUser = function(id,callback)
{
    if (connection)
    {
        var sql = 'SELECT username,name,email,id FROM user WHERE username = ' + connection.escape(id.username)+' and password='+connection.escape(id.password);
        connection.query(sql, function(error, row)
        {
            if(error || row.length==0)
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

//Insertando un usuario
userModel.insertUser = function(userData,callback)
{
    if (connection)
    {
      connection.query('INSERT INTO user SET ?', userData, function(error, result) {
        console.log("error msqll----->",error);
        if(error)
        {
            callback(error, null);
        }
        else
        {
            callback(null, result);
        }
      });
    }
}
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = userModel;