var React = require('react');
var fetch = require('isomorphic-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apikey='ef53b9af36372a9';

var Api = {
	get:function(url){
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID '+ apikey 
			}
		})
		.then(function(response){
			//console.log(response.json());
			return response.json();
		})
	}
}

module.exports = Api;