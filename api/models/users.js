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
var userModel = {};

//obtenemos todos los usuarios
userModel.getUsers = function(callback)
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

//obtenemos un usuario por su id
userModel.getUser = function(id,callback)
{
    if (connection)
    {
        var sql = 'SELECT * FROM user WHERE username = ' + connection.escape(id.username)+' and password='+connection.escape(id.password);
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
module.exports = userModel;
