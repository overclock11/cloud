var config = {};

config = {
    databases: {
        host: 'cloud.cjjsg0nztt5v.us-west-2.rds.amazonaws.com',
        user: 'root',
        password: 'administrador',
        database: 'cloud',
        port:3306
    },pathVideo: {
        path: 'http://localhost:3001/public/videos/',//35.163.86.10
        pathRender: 'http://35.163.86.10:3001/public/videos-render/',
        pathLogic: './public/videos',
        pathLogicOrigin: 'public/videos/',
        pathLogicConvert: 'public/videos-render/'
    },configMail: {
        service: 'Gmail',
        auth: {
            user: 'captuayonovoafredy@gmail.com',
            pass: 'Ti94113010260'
        }
    },configMailFrom: {
        from: 'jlian92@gmail.com',
        subject: '¡Tu video ya se encuentra en el home!',
        text: 'Ya puedes ir a la página principal del concurso y ver tu video en la lista.',
    },awsSES:{
      host: 'email-smtp.us-west-2.amazonaws.com',
      port: 465,
      secure: true, // use TLS
      auth: {
          user: 'AKIAJHJZGAOLDE377F2Q',
          pass: 'AqXF2gbx+XwUI7yNSsgRAPhWtq6iHoiEg7lxPYkzUyZk'
      }
    }
};

module.exports = config;
