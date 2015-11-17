var express = require('express');
var services = require('./src/services.js');

var PORT = 3000;
var app = express();


app.get('/goodreads', function(req, res){
	//HTTP request to goodreads won't be hardcoded. for trying out only
	var ex_req = 'https://www.goodreads.com/author/show.xml?id=18541'

	services.goodreads(ex_req, function(data){
		res.send(data);
	});
});

var main = function() {
	var server = app.listen(PORT, function(){
		console.log(server.address());
	});
};

main();