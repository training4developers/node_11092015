"use strict";

const
	repl = require('repl');

repl.start({ prompt: "MyREPL> " })
	.context.message = 'Some message!';
