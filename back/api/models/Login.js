/**
 * Login.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysql',
  attributes: {
      usuario_id: {
          type: 'integer',
          autoIncrement: true,
          primaryKey: true
      },
      tipo: {
        model: 'tipos',
      },
      videos: {
        collection: 'videos',
        via: 'usuario'
      },
      concursos: {
        collection: 'concursos',
        via: 'usuario'
      },
      usuario_nombre: {
          type: 'string'
      },
      usuario_email: {
          type: 'string'
      },
      usuario_pass: {
          type: 'string'
      }
  }
};
