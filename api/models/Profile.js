/**
* Profiles.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	  firstName: 'string',
	  lastName: 'string',
	  orgName: 'string',
	  orgId: 'string',
	  user: {
		  model: 'users'
	  },
	  userType: {
		  type: 'string',
		  enum: ['ngo', 'contributor', 'admin']
	  },
	  mobile: 'string',
  }
};

