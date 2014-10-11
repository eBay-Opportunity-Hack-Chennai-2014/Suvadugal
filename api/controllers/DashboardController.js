module.exports = {
  dashboard: function(req, res) {
    try{
      if( req.session.user[0].type == 'ngo' ) {
        res.view('dashboard/ngo-dashboard');
      } else {
        res.view('dashboard/contrib-dashboard');
      }
    } catch( e ) {
      console.log( e );
      res.redirect('/');
    }
  },


};
