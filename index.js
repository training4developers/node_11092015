"use strict";

const
	program = require("commander-plus"),
	path = require("path"),
	app = require(path.join(__dirname, "app", "app.js"));

let
	defaultPort = process.env.PORT || 8080,
	defaultFolder = path.join(__dirname, "app", "www");

program
	.version("0.0.1")
	.option("-P, --port [type]", "sets the web server port")
	.option("-F, --folder [type]", "sets the web server folder")
	.parse(process.argv);

program.port = program.port || defaultPort;
program.folder = program.folder || defaultFolder;

app({
	webServer: {
		port: program.port,
		folder: program.folder
	}
});

// function outerFunc() {
//
// 	var t = "Hi!";
//
// 	setTimeout(function() {
// 		t = "Bye!";
// 		console.log("t has been changed");
// 	}, 2000);
//
// 	return function() {
// 		console.log(t);
// 	}
// }
//
// var fn = outerFunc();
// setTimeout(function() {
// 	fn();
// }, 4000);

// program.prompt("Enter your first name: ", function(firstName) {
//
// 	program.prompt("Enter your last name: ", function(lastName) {
//
// 		program.prompt("Enter your age: ", function(age) {
// 			console.log(firstName);
// 			console.log(lastName);
// 			console.log(age);
// 		});
//
// 	});
// });

// function getInput(promptString) {
// 	return new Promise(function(resolve, reject) {
// 		program.prompt(promptString, function(inputValue) {
// 			resolve(inputValue);
// 		});
// 	});
// }
//
// var person = {};
//
// var pFirstName = getInput("Enter your first name: ")
//
// pFirstName.then(function(firstName) {
// 	person.firstName = firstName;
// 	return getInput("Enter your last name: ");
// }).then(function(lastName) {
// 	person.lastName = lastName;
// 	return getInput("Enter your age: ");
// }).then(function(age) {
// 	person.age = age;
// 	console.log(person);
// });
//
// pFirstName.then(function(firstName) {
// 	console.log(firstName.toUpperCase());
// })

// Promise.all([ajaxCall1, ajaxCall2, ajaxCall3]).then(functon(results) {
//
// })






// console.log(`port: ${program.port}`);
// console.log(`folder: ${program.folder}`);
