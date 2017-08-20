/**
 * Estados.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    estado_id:{
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    estado_nombre:{
      type:'string'
    },
    video: {
      collection: 'videos',
      via: 'estado'
    }
  }
};
