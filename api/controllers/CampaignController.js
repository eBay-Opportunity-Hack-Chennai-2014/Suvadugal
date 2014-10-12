/**
 * CampaignController
 *
 * @description :: Server-side logic for managing Campaigns
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res)
	{
		res.view();
	},

	createCampaign: function(req, res)
	{
		res.view('campaign/new');
	}
};
