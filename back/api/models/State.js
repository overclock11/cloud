/**
 * State.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'mysql',
 	attributes: {
 		id: {
	      type: 'integer',
	      unique: true,
	      primaryKey: true,
	      columnName: 'id'
	    },
	    name: {
	      type: 'string',
	      columnName: 'name'
	    },
	    active: {
	      type: 'float',
	      columnName: 'active',
	      default: false
	    },
	    dateCreate: {
	      type: 'datetime',
	      columnName: 'date_create'
	    },
  	}
};

