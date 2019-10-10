/* 
---- Run in CMD as 'node filename.js (string) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/8jcffg/20180514_challenge_361_easy_tally_program/

	Challenge #361 [Easy] Tally Program
	-----------
	Description

		5 Friends (let's call them a, b, c, d and e) are playing a game and need to keep track of the scores. Each time someone scores a point, the letter of his name is typed in lowercase. If someone loses a point, the letter of his name is typed in uppercase. Give the resulting score from highest to lowest.
		
	Input Description

		A series of characters indicating who scored a point. 
		Examples:
		-----
			abcde
			dbbaCEDbdAacCEAadcB
		-----

	Output Description

		The score of every player, sorted from highest to lowest.
		Examples:
		-----
			a:1, b:1, c:1, d:1, e:1
			b:2, d:2, a:1, c:0, e:-2
		-----

	Challenge Input

		EbAAdbBEaBaaBBdAccbeebaec

*/

// init vars
var args = process.argv.slice(2);
var errorCount = 0;
var arr = [];
var totals = {};
var out = "";

// Operation
function count(str){
	// init vars
	arr = str.split("");
	totals = {};
	out = "";

	// Main loop
	for(let i = 0; i < arr.length; i++){
		// handle undefined
		if(typeof totals[arr[i].toLowerCase()] !== "number"){
			totals[arr[i].toLowerCase()] = 0;
		}
		// count
		if(/[A-Z]/.test(arr[i])){
			totals[arr[i].toLowerCase()]-=1;
		} else {
			totals[arr[i].toLowerCase()]+=1;
		}
	}

	// Build Output
	for(let [key, value] of Object.entries(totals)){
		out += ", " + key + ":" + value;
	}
	out = out.substr(2);


	return out;
}

console.log('count("EbAAdbBEaBaaBBdAccbeebaec") => ' + count("EbAAdbBEaBaaBBdAccbeebaec"));



// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		out = "";

		// Test for invalid inputs and skip
		if(/\W+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n+errorCount) + "]. Only Strings Allowed. Continuing...\n-----");
			args.splice(n);
			n--;
			errorCount++;
			continue;
		}
		
		// Output
		console.log('count("' + args[n] +  '")\t=> ' + count(args[n]));
	}

}	else {
	// console.log("Missing arguments. Input a String");
}
