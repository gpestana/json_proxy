var request = require('request');
var parser = require('xml2json');

var goodreads = function(req, cb){
	var key = 'lGYMjPTkWmM5Ea58wxgKMA';
	var secret = 'pWkhRDGJNkSm4dSxl3CBds7HIZqck3CKWvwmThJDjxo';

	request.get(req+'&key='+key, function(err, res, body){
		var parsed_data = JSON.parse(parser.toJson(body));
		console.log(typeof parsed_data);

		cb(parsed_data);	
	});
}

exports.goodreads = goodreads;