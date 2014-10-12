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
            partialFile: 'ngo-dashboard.ejs',
			layout: 'dashboard/dashboardlayout'
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
    res.view('dashboard/layout',
    {
      username: req.session.user.profile.firstName,
      partialFile: 'events.ejs'
    });
  },

  followers: function(req, res) {
    res.view('dashboard/followers');
  },

  volunteers: function(req, res) {
    res.view('dashboard/volunteers');
  },

  sendSms: function(req, res) {
    var accountSid = '';
    var authToken = "";
    var client = require('twilio')(accountSid, authToken);

    client.messages.create({
            body: req.param('eventName'),
            to: "+919884533166",
            from: "+12602225231"
        }, function(err, message) {
            res.json( message );
        });
  }

};
