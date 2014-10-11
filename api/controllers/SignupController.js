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
		var firstName = req.param('firstName');
		var lastName = req.param('lastName');
		var orgName = req.param('orgName');
		var email = req.param('emailId');
		var password = req.param('password');
		var mobile = req.param('mobileNo');
		var type = 'ngo';

		User.findByEmail(email).exec(function(err, usr) {
			if(err) {
				res.send(500, {error: 'DB error'});
			}
			else if(! _.isEmpty(usr)) {
				res.send(400, {error: 'Email id already registered'});
			}
			else {
				var hasher = require('password-hash');
				password = hasher.generate(password);

				User.create({
						email: email,
						password: password,
						active: false,
						profile: null,
						type: type
				}).exec(function(err, usr) {
					if(err) {
						res.send(500, {error: "DB error"});
					}
					else {
						Profile.create({
							firstName: firstName,
							lastName: lastName,
							orgName: orgName,
							mobile: mobile,
							user: usr.userId
						}).exec(function(err, prof) {
							if(err) {
								res.send(500, {error: "DB error"});
							}
							else {
								User.update({userId: prof.user}, {profile:prof.id}).exec(function(err, p) {
									res.redirect('/signupconfirm');
								});
							}
						});
					}
				});
			}
		});
	}
};
