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
*/

// init vars
var args = process.argv.slice(2);
var original = -1;
var working = -1;
var temp = -1;
var persistence = 0;
var done = false;

// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		// Test for invalid inputs and skip
		if(/\D+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (i) + "]. Numbers Only. Continuing...\n-----");
			continue;
		}

// -------------

		// Initial values
		persistence = 0;
		done = false;
		temp = 0;

		original = args[n];

		// Convert to array of digits
		working = original.split('').map(function(t){return parseInt(t)});

		// Operation
		while(!done){
			temp = 0;
			persistence++;
			for(var i = 0; i < working.length; i++){
				temp+=working[i];
			}
			if(temp < 10){
				done = true;
				break;	
			} else {
				working = (""+temp).split('').map(function(t){return parseInt(t)});
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