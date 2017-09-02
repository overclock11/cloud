/**
 * Video.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'mysql',
 	attributes: {
	    name: {
	      type: 'string',
	      columnName: 'name'
	    },
	    url: {
	      type: 'string',
	      unique: true,
	      columnName: 'url'
	    },
	    urlMaster: {
	      type: 'string',
	      columnName: 'url_master'
	    },
	    description: {
	      type: 'text',
	      columnName: 'description'
	    },
	    showHome: {
	      type: 'boolean',
	      columnName: 'show_home',
          defaultsTo: 'false',
      	  size: 1,
      	  boolean: true
	    },
	    notify: {
	      type: 'boolean',
	      columnName: 'notify',
          defaultsTo: 'false',
      	  size: 1,
      	  boolean: true
	    },
	    active: {
	      type: 'boolean',
	      columnName: 'active',
          defaultsTo: 'true',
      	  size: 1,
      	  boolean: true
	    },
	    participation: {
	      model: 'competition',
	      columnName: 'competition_id'
	    },
	    state: {
	      model: 'state',
	      columnName: 'state_id'
	    },
	    competitor: {
	      model: 'user',
	      columnName: 'user_id'
	    }
    }
};

