/* 
---- Run in CMD as 'node filename.js (int) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/9cvo0f/20180904_challenge_367_easy_subfactorials_another/

	Challenge #367 [Easy] Subfactorials - Another Twist on Factorials
	-----------
	Description

		Most everyone who programs is familiar with the factorial - n! - of a number, the product of the series from n to 1. 
		One interesting aspect of the factorial operation is that it's also the number of permutations of a set of n objects.

		Today we'll look at the subfactorial, defined as the derangement of a set of n objects, 
		or a permutation of the elements of a set, such that no element appears in its original position. 
		
		We denote it as !n.

		Some basic definitions:
	    !1 -> 0 because you always have {1}, meaning 1 is always in it's position.
	    !2 -> 1 because you have {2,1}.
	    !3 -> 2 because you have {2,3,1} and {3,1,2}.

		And so forth.

		Today's challenge is to write a subfactorial program. Given an input n, can your program calculate the correct value for n?
	
*/

// init vars
var args = process.argv.slice(2);
var errorCount = 0;

// Operation
function derangement(num){
	if(num === 0){
		return 1;
	}

	// derangment recurrence
	return ((num*derangement(num-1)) + Math.pow(-1,num));
}

// args is input
if(args.length > 0){

	for (let n = 0; n < args.length; n ++){

		// Test for invalid inputs and skip
		if(/\D+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n + errorCount) + "]. Only integers allowed. Continuing...\n-----");
			args.splice(n);
			n--;
			errorCount++;
			continue;
		}
	}
}	else {
	// console.log("Missing arguments. input an integer");
}

// default input
console.log("!6\t = "  + derangement(6));  // 265
console.log("!9\t = "  + derangement(9));  // 133496
console.log("!14\t = " + derangement(14)); // 32071101049

for(let j = 0; j < args.length; j++){
	console.log("!" + args[j] + "\t = " + derangement(args[j]));
}

