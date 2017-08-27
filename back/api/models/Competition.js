/**
 * Competition.js
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
	    surname: {
	      type: 'string',
	      columnName: 'name'
	    },
	    company: {
	      type: 'string',
	      columnName: 'company'
	    },
	    url: {
	      type: 'string',
	      unique: true,
	      columnName: 'url'
	    },
	    image: {
	      type: 'string',
	      columnName: 'image'
	    },
	    urlImageBanner: {
	      type: 'string',
	      columnName: 'url_image_banner'
	    },
	    dateStart: {
	      type: 'datetime',
	      columnName: 'date_start'
	    },
	    dateEnd: {
	      type: 'datetime',
	      columnName: 'date_end'
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
	    active: {
	      type: 'float',
	      columnName: 'active',
	      default: false
	    },
	    dateCreate: {
	      type: 'datetime',
	      columnName: 'date_create'
	    },
	    videos: {
	      collection: 'video',
	      via: 'participation'
	    },
	    maker: {
	      model: 'user'
	      columnName: 'user_id',
	    }
  	}
};

