module.exports = {
	dashboard: function(req, res) {
		// TODO show view based on user type
		if(typeof(req.session.user) === 'undefined') {
			res.redirect('/login');
		}
		else {
			try{
				if( req.session.user.type == 'ngo' ) {
					res.view('dashboard/ngo-dashboard', {username: req.session.user.profile.firstName});
				}
				else {
					res.view('dashboard/contrib-dashboard', {username: req.session.user.profile.firstName});
				}
			} catch( e ) {
				console.log( e );
				res.redirect('/');
			}
		}
	},
};
