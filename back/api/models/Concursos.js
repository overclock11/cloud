/**
 * Concursos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 // {
 //     "concurso_usuario_id":1,
 //     "concurso_nombre": "Videos de gatos",
 //     "concurso_banner": "https://misanimales.com/wp-content/uploads/2015/09/mimica-y-gestos-en-los-gatos.jpg",
 //     "concurso_url": "https://myurl.com.co",
 //     "concurso_finicio":"2017-08-19",
 //     "concurso_ffin":"2017-08-30"
 // }
module.exports = {

  connection: 'mysql',
  attributes: {
      concurso_id: {
          type: 'integer',
          autoIncrement: true,
          primaryKey: true
      },
      usuario: {
        model: 'login',
      },
      videos: {
        collection: 'videos',
        via: 'concurso'
      },
      concurso_nombre: {
          type: 'string'
      },
      concurso_banner: {
          type: 'string'
      },
      concurso_url: {
          type: 'string'
      },
      concurso_finicio: {
          type: 'date'
      },
      concurso_ffin: {
          type: 'date'
      }
  }
};
