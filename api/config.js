var config = {};

config = {
    databases: {
        host: 'cloud.cjjsg0nztt5v.us-west-2.rds.amazonaws.com',
        user: 'root',
        password: 'administrador',
        database: 'cloud',
        port:3306          
    },pathVideo: {
        path: 'http://35.163.86.10:3001/public/videos/',
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
    }
};
 
module.exports = config;
 
