/* 
---- Run in CMD as 'node filename.js (int) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/akv6z4/20190128_challenge_374_easy_additive_persistence/

	Challenge #374 [Easy] Additive Persistence
	-----------
	Description
		
		Inspired by this tweet, today's challenge is to calculate the additive persistence of a number, 
		defined as how many loops you have to do summing its digits until you get a single digit number. 

		Take an integer N:
    - Add its digits
    - Repeat until the result has 1 digit

		The total number of iterations is the additive persistence of N.

		Your challenge today is to implement a function that calculates the additive persistence of a number.

	Bonus

		The really easy solution manipulates the input to convert the number to a string and iterate over it. 
		Try it without making the number a strong, decomposing it into digits while keeping it a number.

*/

// init vars
var args = process.argv.slice(2);
var original = -1;
var working = -1;
var temp = -1;
var scale = 1;
var persistence = 0;
var done = false;
var scaleMax = 0;

// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		// Test for invalid inputs and skip
		if(/\D+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (i) + "]. Numbers Only. Continuing...\n-----");
			continue;
		} else if(args[n] > Number.MAX_SAFE_INTEGER){
			console.log("-----\nInvalid Input at [" + (i) + "]. Number is too large. Continuing...\n-----");
			continue;
		}

// -------------

		// Initial Values
		persistence = 0;
		done = false;
		temp = 0;

		original = args[n];

		working = parseInt(original);
		scaleMax = Math.pow(10, (""+working).split("").length);

		// Operation
		while(!done){
			persistence++;
			scale = 1;
			temp = 0;
			
			while (scale < scaleMax){
				temp += (parseInt(working/scale) % 10);
				scale *= 10;
			}
			if(temp < 10){
				done = true;
				break;	
			} else {
				working = temp;
				done = false;
			}
		}

		// Output
		console.log("Number:\n" + original + "\nPersistence:\n" + persistence +"\n");

// -------------
	
	}
} else {
	console.log("Missing arguments. Input a Number")
}