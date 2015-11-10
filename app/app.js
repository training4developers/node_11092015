module.exports = function(config) {

	"use strict";

	const
		http = require("http"),
		express = require("express"),
		fs = require("fs"),
		path = require("path"),
		bodyParser = require("body-parser");

	let
		app = express(),
		server = http.createServer(app),
		counter = 0;

	//app.use(express.static(config.webServer.folder));

	function myFactory() {

		return function myFunc(req, res, next) {

			//parse the body

			if (!req.headers) {
				res.status(500).end("you're finished...");
			}

			console.log("I was called.");
			next();
		}

	}

	app.use(myFactory());


	app.use("/api", bodyParser.json());

	app.get("/favicon.ico", function(req, res) {
		res.end("I have no favicon.ico.");
	});

	app.post("/api/widgets/:widgetId?", function(req, res) {

		res.send(req.params.widgetId)

	})

	app.use("/:fileName", function(req, res) {
		console.log(req.body);
		res.end(req.query.userid + req.params.fileName);

	});


	server.listen(config.webServer.port, function() {
		console.log("web server started on port: " + config.webServer.port);
	});

};
