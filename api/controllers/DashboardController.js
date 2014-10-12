module.exports = {
  dashboard: function(req, res) {
    // TODO show view based on user type
	if(typeof(req.session.user) === 'undefined') {
		res.redirect('/login');
	}
	else {
		res.view('dashboard/ngo-dashboard', {username: req.session.user.profile.firstName});
	}
  },


};
