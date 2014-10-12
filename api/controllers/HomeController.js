/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
		// This means show the view at views/home/index.ejs
		res.view();
	},

	about: function(req, res) {

	}
	
};

