/* 
---- Run in CMD as 'node filename.js (int) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/aphavc/20190211_challenge_375_easy_print_a_new_number_by/

	Challenge #375 [Easy] Print a new number by adding one to each of its digit
	-----------
	Description
		
		A number is input in computer then a new [one] should get printed by adding one to each of its digit. 
		If you encounter a 9, insert a 10 (don't carry over, just shift things around).

		For example, 998 becomes 10109.
*/

// init vars
var args = process.argv.slice(2);
var original = -1;
var working = -1;
var out = "";

// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		out = "";

		// Test for invalid inputs and skip
		if(/\D+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (i) + "]. Numbers Only. Continuing...\n-----");
			continue;
		}

// -------------

		original = args[n];

		// Convert to array of characters
		working = original.split('');

		// Operation
		for(var i = 0; i < working.length; i++){
			if(working[i] == '9'){
				working[i] = '10';
			}
			out+=working[i];
		}

		// Output
		console.log(original + "\t: " + out);

// -------------
	
	}
} else {
	console.log("Missing arguments. Input a Number")
}