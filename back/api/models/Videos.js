/**
 * Videos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysql',
  attributes: {
      video_id: {
          type: 'integer',
          autoIncrement: true,
          primaryKey: true
      },
      estado: {
        model: 'estados',
      },
      concurso: {
        model: 'concursos',
      },
      usuario:{
        model:'login'
      },
      video_nombre: {
          type: 'string'
      },
      video_url: {
          type: 'string'
      }
  }
};
