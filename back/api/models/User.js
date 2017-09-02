/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'mysql',
 	attributes: {
	    username: {
	      type: 'string',
	      unique: true,
	      columnName: 'username'
	    },
	    name: {
	      type: 'string',
	      columnName: 'name'
	    },
	    surname: {
	      type: 'string',
	      columnName: 'surname'
	    },
	    email: {
	      type: 'string',
	      unique: true,
	      columnName: 'email'
	    },
	    password: {
	      type: 'string',
	      columnName: 'password'
	    },
	    manager: {
	      type: 'float',
	      columnName: 'manager',
	      default: false
	    },
	    active: {
	      type: 'boolean',
	      columnName: 'active',
          defaultsTo: 'true',
      	  size: 1,
      	  boolean: true
	    },
	    participations: {
	      collection: 'video',
	      via: 'competitor'
	    },
	    publications: {
	      collection: 'competition',
	      via: 'maker'
	    }

  	}
};

