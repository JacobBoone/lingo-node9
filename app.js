var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose')
var randomWords = require('random-words');
		 



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);
app.post('/transubmit', indexController.translate);
app.post('/quizsubmit', function(req, res){
	res.send(randomWords(10))
});
app.post('/answerTranslate', indexController.quizTranslate); 

var server = app.listen(5762, function() {
	console.log('Express server listening on port ' + server.address().port);
});
