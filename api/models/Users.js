/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	  userId: {
		  type: 'integer',
		  autoIncrement: true
	  },
	  email: {
		  type: 'string',
		  index: true,
		  primaryKey: true
	  },
	  password: 'string',
	  mobile: 'string',
	  username: 'string',
	  userType: {
		  type: 'string',
		  enum: ['ngo', 'contributor', 'admin']
	  },
	  active: 'boolean'
  }
};

