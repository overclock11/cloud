/**
 * Video.js
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
	      type: 'float',
	      columnName: 'show_home',
	      default: false
	    },
	    notify: {
	      type: 'float',
	      columnName: 'show_home',
	      default: false
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
	    participation: {
	      model: 'competition'
	      columnName: 'competition_id',
	    },
	    state: {
	      model: 'state',
	      columnName: 'state_id',
	    },
	    competitor: {
	      model: 'user'
	      columnName: 'user_id',
	    }
    }
};

