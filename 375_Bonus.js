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
	
	Bonus

		This challenge is trivial to do if you map it to a string to iterate over the input, operate, and then cast it back.
		Instead, try doing it without casting it as a string at any point, keep it numeric (int, float if you need it) only.
*/

// init vars
var args = process.argv.slice(2);
var original = -1;
var working = -1;
var remainder = 0;

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

		// Convert to integer
		original = parseInt(args[n]);

		// Recursive Operation Function
		function oper(num, scale){

			// End on completed check
			if(num < scale){
				return num;
			}
			remainder = 0;
			working = num;

			// Operation
			if(parseInt(num/scale) % 10 === 9){

				// save what was already processed
				remainder = num % scale;

				// insert 10 in place of 9
				working = working - (9*scale);
				working = parseInt(working/scale);
				working = working * scale * 10;

				// rescale and insert remainder
				working = working + (scale * 10) + remainder;

				// repeat with adjusted scale
				return oper(working, (scale * 100));

			} else {
				// repeat next scale
				return oper(num, scale*10);
			}
		}

		// Output
		console.log(original + "\t: " + oper(original, 1));

// -------------

	}
} else {
	console.log("Missing arguments. Input a Number")
}