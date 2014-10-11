/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  createUser: function(req, res) {
		var response;
    User.create({
			email: 'test@test.com',
			password: 'test',
			active: true,
		}).exec( function(err, user) {
      res.json( {
        error: err,
        user: user
      } );
    });
  }
};
