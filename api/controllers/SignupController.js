/**
 * SignupController
 *
 * @description :: Server-side logic for managing signups
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
		// This means show the view at views/home/index.ejs
		res.view();
	},

	signup: function(req, res) {
		var email = req.param('emailId');
		var password = req.param('password');
		var mobile = req.param('mobileNo');

		User.findByEmail(email).exec(function(err, usr) {
			if(err) {
				res.send(500, {error: 'DB error'});
			}
			else if(usr) {
				res.send(400, {error: 'Email id already registered'});
			}
			else {
				var hasher = require('password-hash');
				password = hasher.generate(password);

				User.create(
					{
						email: email,
						password: password, 
						active: false,
					}
				).exec(function(err, usr) {

					Profile.create(
					{
						firstName: firstName,
						lastName: lastName,



					}
				).exec(function(err, profile) {
					
					});

				});

			}

		});


	}

	
};

