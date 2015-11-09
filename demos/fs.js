"use strict";

const
	path = require("path"),
	fs = require("fs"),
	util = require("util");

// check to see if the file exists
fs.stat("repl1.js", function(err, data) {

	if (err) {
			console.log("file does not exist");
			return;
	}

	console.log(util.inspect(data));
})

// leave out utf-8 to get a buffer object
fs.readFile("repl.js", "utf-8", function(err, data) {

	console.log(data);



});

fs.watch
