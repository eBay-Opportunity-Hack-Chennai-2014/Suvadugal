/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	get: function (req, res) {
		res.sendfile(req.path.substr(1));
	},
	upload: function  (req, res) {
    req.file('userPhoto').upload(function (err, files) {
      if (err)
        return res.serverError(err);

      return res.json({
        message: files.length + ' file(s) uploaded successfully!',
        files: files
      });
    });
  },
	_config: {
		rest: false,
		shortcuts: false
	}
};
