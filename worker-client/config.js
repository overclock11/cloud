var config = {};

config = {
    databases: {
        host: 'cloud.cjjsg0nztt5v.us-west-2.rds.amazonaws.com',
        user: 'root',
        password: 'administrador',
        database: 'cloud',
        port:3306
    },pathVideo: {
        path: 'http://balanceadorcarga001-2004680552.us-west-2.elb.amazonaws.com:3001/public/videos/',//35.163.86.10
        pathRender: 'http://balanceadorcarga001-2004680552.us-west-2.elb.amazonaws.com:3001/public/videos-render/',
        pathLogic: '/home/ec2-user/cloud/worker-client/public/videos',
        pathLogicOrigin: '/home/ec2-user/cloud/worker-client/public/videos/',
        pathLogicConvert: '/home/ec2-user/cloud/worker-client/public/videos-render/'
    },configMail: {
        service: 'Gmail',
        auth: {
            user: 'captuayonovoafredy@gmail.com',
            pass: 'sadsad'
        }
    },configMailFrom: {
        from: 'jlian92@gmail.com',
        subject: '¡Tu video ya se encuentra en el home!',
        text: 'Ya puedes ir a la página principal del concurso y ver tu video en la lista.',
    },awsSES:{
      host: 'email-smtp.us-west-2.amazonaws.com',
      port: 465,
      secure: true
    }
};

module.exports = config;
