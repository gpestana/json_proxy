var express = require('express');
var services = require('./src/services.js');

var PORT = 3000;
var app = express();


app.get('/proxy', function(req, res){
	var r = req.query.r;
	
	services.proxy(r, function(data){
		res.send(data);
	});
});

var main = function() {
	var server = app.listen(PORT, function(){
		console.log(server.address());
	});
};

main();