/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		userId: {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true
		},
		email: {
			type: 'string',
			index: true,
		},
		password: 'string',
		active: 'boolean',
		profile: {
			model: 'profile'
		}
	}
};
