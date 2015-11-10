module.exports = function(config) {

	"use strict";

	const
		http = require("http"),
		express = require("express");

	let
		app = express(),
		server = http.createServer(app);

	app.use(express.static(config.webServer.wwwFolder));

	server.listen(config.webServer.port, function() {
		console.log("web server started on port " + config.webServer.port);
	});

};
