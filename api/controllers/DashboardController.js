module.exports = {
  dashboard: function(req, res) {
    // TODO show view based on user type
    if(typeof(req.session.user) === 'undefined') {
      res.redirect('/login');
    }
    else {
      try{
        if( req.session.user.type == 'ngo' ) {
          res.view('dashboard/layout',
          {
            username: req.session.user.profile.firstName,
            body: 'dashboard/ngo-dashboard.ejs'
          });
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

  events: function(req, res) {
    res.view('dashboard/events');
  },

  followers: function(req, res) {
    res.view('dashboard/followers');
  },

  volunteers: function(req, res) {
    res.view('dashboard/volunteers');
  },


};
