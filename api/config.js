var config = {};

config = {
    databases: {
        host: 'cloud.cjjsg0nztt5v.us-west-2.rds.amazonaws.com',
        user: 'root',
        password: 'administrador',
        database: 'cloud',
        port:3306          
    },pathVideo: {
        path: 'http://balanceadorcarga001-2004680552.us-west-2.elb.amazonaws.com:3001/public/videos/',
        pathLogic: '/home/ec2-user/cloud/worker-client/public/videos',
        pathLogicConvert: '/home/ec2-user/cloud/worker-client/public/videos-render'
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

