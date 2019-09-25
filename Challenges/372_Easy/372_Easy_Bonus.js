/* 
---- Run in CMD as 'node filename.js (string) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/

	Challenge #372 [Easy] Perfectly balanced
	-----------
	Description
		
		Given a string containing only the characters 'x' and 'y', find whether there are the same number of 'x's and 'y's.

	Bonus

		Given a string containing only lowercase letters, find whether every letter that appears in the string appears the same number of times. 
		Don't forget to handle the empty string ("") correctly!

*/

// init vars
var args = process.argv.slice(2);
var arrIn = [];
var count = {};
var check = 0;
var isEmpty = true;


// Operation
function balanced(str){
	// init vars
	arrIn = str.split('');
	count = {};
	check = 0;
	isEmpty = true;
	
	// for each character, set/add 1 to count
	arrIn.forEach((char)=>{
		count[char] = (char in count) ? count[char]+1 : 1;
	});

	// Set check to first char count, check all chars
	for (var char in count){
		if(isEmpty){
			check = count[char];
			isEmpty = false;
		} else if(check !== count[char]){
			return false;
		}
	};

	// Success
	return true;
}


// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		out = "";

		// Test for invalid inputs and skip
		if(/\W+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n) + "]. Only Strings Allowed. Continuing...\n-----");
			continue;
		}
		
		// Output
		console.log("String: " + args[n] +  "\n" + balanced(args[n].toLowerCase()) + "\n");
	}

}	else {
	console.log("Missing arguments. Input a String");
}
