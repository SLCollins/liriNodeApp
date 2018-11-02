//initialize required modules
require("dotenv").config();
var keys = require("./keys");
var request = require("request");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//organize argv arguments
var action = process.argv[2];
var arg1 = process.argv[3];
var nodeArg = process.argv;
var nodeArr = [];
for (var i = 3; i < nodeArg.length; i++) {
    nodeArr.push(nodeArg[i]);
};
var nodeValue = nodeArr.join("+");

//variables for OMDB API call
var queryUrl = "http://www.omdbapi.com/?t=" + nodeValue + "&y=&plot=short&apikey=trilogy";
var options = {  
    url: queryUrl,
    method: "GET",
};
