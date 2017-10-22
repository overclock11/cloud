var mongoose = require('mongoose');
var UserModel = require('../models/users');
var Modelo = mongoose.model('Modelo');
const uuidv4 = require('uuid/v4');
const config = require("../config");
var redis = require("redis");
var client = redis.createClient(config.configRedis.port,config.configRedis.endpoint);

/**
 * Funciones de Mongo
 */
exports.mcrear = function (req, res) {
    console.log(req.body.competition_id);
    if (req.body.competition_id) {
        //si existe quiere decir que esta cargando un video un usuario

        // validar si el usuario existe por medio del correo
        Modelo.find({"administrador.competition.id": req.body.competition_id}, function (error, concurso) {
            var usuarioId;
            var competitionPos;
            var existe = false;
            let tam = concurso[0].administrador.competition.length;
            for (var i = 0; i < tam; i++) {
                var usuario = concurso[0].administrador.competition[i].usuario;
                if (concurso[0].administrador.competition[i].id === req.body.competition_id) {
                    competitionPos = i;
                    for (var j = 0; j < usuario.length; j++) {
                        if (usuario[j].email === req.body.email) {
                            // el usuario existe
                            usuarioId = usuario[j];
                            existe = true;
                        }
                    }
                }
            }
            //si esta responde el ID del usuario al front
            if (existe) {
                //si existe responde el usuario
                res.status(200).json(usuarioId)
            }
            else {
                //si no existe lo crea y responde el id
                let nuevousuario = req.body;
                nuevousuario.id = uuidv4();
                nuevousuario.video = [];
                concurso[0].administrador.competition[competitionPos].usuario.push(nuevousuario);
                Modelo.update({"_id": concurso[0]._id}, concurso[0], function (err, datos) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(nuevousuario);
                    }
                })
            }
        })
    }
    else {
        //NO se esta cargando un video, SE ESTA CREANDO UN ADMINISTRADOR
        let userData = new Modelo({
            administrador: {
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password,
                manager: req.body.manager,
                active: req.body.active,
                id: uuidv4(),
                createdAt: new Date(),
                updatedAt: null,
                competition: new Array()
            }
        });
        userData.save(function (err, userData) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(userData);
            }
        })
    }
}

exports.mlogin = function (req, res) {

    //consultar en redis
    let llaveRedis = req.body.username + req.body.password;
    var redisResult = null;
    console.log("llave de consulta en redis",llaveRedis);
    client.get(llaveRedis, function (err, reply) {
        console.log("consulta a redis", reply);
        redisResult = reply;
        console.log("redis result = ", redisResult);

        if (redisResult===null) {
            //redis no tiene nada  debe consultarse en la base de datos
            let datosUsuario = {
                username: req.body.username,
                password: req.body.password
            };
            console.log("objeto de consutal en mongo", datosUsuario);
            Modelo.find({
                "administrador.username": datosUsuario.username,
                "administrador.password": datosUsuario.password
            }, function (error, data) {
                console.log("resultado de consulta en mongo", data.length);
                if (data.length > 0)
                {
                    let filtrar = {};
                    filtrar.username = data[0].administrador.username;
                    filtrar.name = data[0].administrador.name;
                    filtrar.email = data[0].administrador.email;
                    filtrar.id = data[0].administrador.id;
                    let datos = [];
                    datos.push(filtrar);

                    // agregar a redis
                    console.log("agregando a redis");
                    client.set(llaveRedis, JSON.stringify(datos), function (err, reply) {
                        console.log(reply, "guardado en redis");
                        res.status(200).json(datos);
                    });
                }
                else {
                    if (error) {
                        console.log("datos < 0 ");
                        res.status(401).json(error);
                    }
                    else {
                        console.log("usuario no valido");
                        res.status(401).json({"mensaje": "Usuario no valido"});
                    }
                }
            });
        }
        else {
            //redis tiene datos de sesion
            console.log("respeusta cuando redis tiene datos", redisResult);
            res.status(200).json(JSON.parse(redisResult));
        }
    });

};


/**
 * Funciones de Mysql
 */
exports.crear = function (req, res) {

    var userData = {
        username: req.body.username,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        manager: req.body.manager,
        active: req.body.active,
        id: req.body.id,
        createdAt: new Date(),
        updatedAt: null
    };
    UserModel.insertUser(userData, function (error, data) {
        //si el usuario se ha insertado correctamente mostramos su info
        console.log(data);
        if (data) {
            res.json(200, data);
        }
        else {
            console.log("se fue por error", data);
            res.json(500, {"msg": error});
        }
    });
};
exports.login = function (req, res) {
    let datosUsuario = {
        username: req.body.username,
        password: req.body.password
    };
    UserModel.getUser(datosUsuario, function (error, data) {
        if (data) {
            res.json(200, data);
        }
        else {
            res.json(401);
        }
    })
};
