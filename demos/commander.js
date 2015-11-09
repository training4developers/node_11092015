"use strict";

const
	program = require("commander-plus");

program
	.version("0.0.1")
	.option("-P, --port [type]", "Web Server Port")
	.option("-F, --folder [type]", "Web Server Root Folder")
	.parse(process.argv);

console.log("Port: " + program.port);
console.log("Folder: " + program.folder);

var
	firstName, lastName;

program.prompt('first name: ', function(fn){
  firstName = fn;

	program.prompt('last name: ', function(ln){
	  lastName = ln;

		console.log(`hi! ${firstName} ${lastName}`);

		process.exit();
	});

});
