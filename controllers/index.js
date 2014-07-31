var BeGlobal = require('node-beglobal');

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '6N5DWH3LJNFGT04uMleZmQ%3D%3D'
});



var indexController = {
	index: function(req, res) {

		res.render('index');
	},
	translate: function(req, res){


		beglobal.translations.translate(
		{text: req.body.word , from: req.body.fromLang , to: req.body.toLang},
		function(err, results) {
		    if (err) {
		      return console.log(err);
		    }

		    res.send(results);
	  		});


	}
};

module.exports = indexController;