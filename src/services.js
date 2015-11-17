var request = require('request');
var parser = require('xml2json');

//temp
var goodreads_key = 'lGYMjPTkWmM5Ea58wxgKMA'; 

var proxy = function(req, cb){
	request.get(req+'&key='+goodreads_key, function(err, res, body){
		var parsed_data = JSON.parse(parser.toJson(body));
		console.log(typeof parsed_data);

		cb(parsed_data);	
	});
}

exports.proxy = proxy;