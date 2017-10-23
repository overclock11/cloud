var config = {};

config = {
    databases: {
        host: 'cloud.cjjsg0nztt5v.us-west-2.rds.amazonaws.com',
        user: 'root',
        password: 'administrador',
        database: 'cloud',
        port:3306          
    },pathVideo: {
        path: 'http://34.212.210.50:3001/public/videos/',
        pathLogic: './public/videos',
        pathLogicConvert: './public/videos-render'
    },configMail: {
        service: 'Gmail',
        auth: {
            user: 'captuayonovoafredy@gmail.com',
            pass: 'dasdas'
        }
    },configMailFrom: {
        from: 'captuayonovoafredy@gmail.com',
        subject: 'Correo cargado exitosamesnte prueba 001',
        text: 'Correo convertido exitosamente, su video se encuentra disponible en la pagina oficial del concurso',
    },configSqs:{
        "auth":{
            "accessKeyId": "AKIAJLQEV2Q7CTCX6UQQ",
            "secretAccessKey": "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"
        },
        "url":"https://sqs.us-west-2.amazonaws.com/347718399261/Proyecto3.fifo",
        "redisport":"6379"
    },configRedis:{
        port:"6379",
        endpoint:"proyecto.fawh4l.0001.usw2.cache.amazonaws.com"
    }

};
 
module.exports = config;
 
