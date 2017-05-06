'use strict';
var extract = require("../src/index.js");

console.log("Testing extraction on a basic sentence");
console.log("--------------------------------------");
console.log( extract( "This is a sentence. Cool! Maybe? 3.141592 is a number." ) );

console.log("");
console.log("Testing extraction with custom dividers");
console.log("--------------------------------------");
console.log( extract( "This is a sentence ending in | Another ) ", false, ["|",")"] ) );

console.log("");
console.log("Testing extraction with custom abbrev.");
console.log("--------------------------------------");
console.log( extract( "Po. test is a tf. person.", ["po","tf"] ) );

