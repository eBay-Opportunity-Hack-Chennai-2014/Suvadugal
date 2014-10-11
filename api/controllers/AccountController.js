/**
 * AccountController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	login: function(req, res) {
		var email = req.param("email");
		var password = req.param("password");
		User.findByEmail(email).exec(function(err, usr) {
			if(err) {
				res.send(500, {error: 'DB error'});
			}
			else {
				if(! _.isEmpty(usr)) {
					var hasher = require('password-hash');

					if (hasher.verify(password, usr[0].password)) {
						req.session.user = usr;
						res.redirect('/dashboard');
					} else {
						res.send(400, { error: "Wrong Password" });
					}
				}
			}
		});
	},
};

