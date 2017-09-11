var config = {};

config = {
  	databases: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cloud'
    },pathVideo: {
        path: 'http://localhost:3001/public/videos/',
        pathLogic: './public/videos',
        pathLogicConvert: './public/videos-render'
    },configMail: {
        service: 'Gmail',
        auth: {
            user: 'captuayonovoafredy@gmail.com',
            pass: 'Ti94113010260'
        }
    },configMailFrom: {
        from: 'captuayonovoafredy@gmail.com',
        subject: 'Correo cargado exitosamesnte prueba 001',
        text: 'Correo convertido exitosamente, su video se encuentra disponible en la pagina oficial del concurso',
    }
};
 
module.exports = config;
 