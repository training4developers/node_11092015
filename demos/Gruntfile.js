module.exports = function(grunt) {

	"use strict";

	const
		path = require("path");

	grunt.initConfig({
		webServer: {
			port: process.env.PORT || 8080,
			wwwFolder: "app/www"
		}
	});

	grunt.registerTask("default", function(port, wwwFolder) {

		let
			config = grunt.config(),
			appModuleFile = path.join(__dirname, "app", "app");

		config.webServer.port = port || config.webServer.port;
		config.webServer.wwwFolder = wwwFolder || config.webServer.wwwFolder;

		require(appModuleFile)(config);

		this.async();

	});

};
