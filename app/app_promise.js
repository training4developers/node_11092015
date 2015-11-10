module.exports = function(config) {

	"use strict";

	const
		http = require("http"),
		express = require("express"),
		fs = require("fs"),
		path = require("path");

	let
		app = express(),
		server = http.createServer(app),
		counter = 0;

	//app.use(express.static(config.webServer.folder));

	app.use(function(req, res) {

		console.log("test");

		var p = new Promise(function(resolve, reject) {
			fs.readFile(path.join(config.webServer.folder, "index2.html"),
				"utf8", function(err, data) {

					if (err) {
						reject(err);
						return;
					}

					resolve(data);
				});
		});

		p.then(function(data) {
			res.end(data);
		}).catch(function(err) {
			console.log(err.message);
			res.status(500).end("an error occurred");
		});

	});

	server.listen(config.webServer.port, function() {
		console.log("web server started on port: " + config.webServer.port);
	});

};
