var config = {};

config = {
    databases: {
        host: 'cloud.cjjsg0nztt5v.us-west-2.rds.amazonaws.com',
        user: 'root',
        password: 'administrador',
        database: 'cloud',
        port:3306
    },pathVideo: {
        path: 'http://35.163.86.10:3001/public/videos/',//35.163.86.10
        pathRender: 'http://35.163.86.10:3001/public/videos-render/',
        pathS3: 'http://d2zsdt0a19wk6b.cloudfront.net/videos/',//35.163.86.10
        pathRenderS3: 'http://d2zsdt0a19wk6b.cloudfront.net/videos-render',
        //pathS3: 'https://s3-us-west-2.amazonaws.com/cloud-proyecto3/videos/',//35.163.86.10
        //pathRenderS3: 'https://s3-us-west-2.amazonaws.com/cloud-proyecto3/videos-render',
        pathLogic: './public/videos',
        pathLogicOrigin: 'public/videos/',
        pathLogicConvert: 'public/videos-render/',
        pathLogicOriginS3: 'videos/',
        pathLogicConvertS3: 'videos-render/'
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
      secure: true, // use TLS
      auth: {
          user: 'AKIAJHJZGAOLDE377F2Q',
          pass: 'AqXF2gbx+XwUI7yNSsgRAPhWtq6iHoiEg7lxPYkzUyZk'
      }
    }
};

module.exports = config;
