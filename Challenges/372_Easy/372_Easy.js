/* 
---- Run in CMD as 'node filename.js (string) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/

	Challenge #372 [Easy] Perfectly balanced
	-----------
	Description
		
		Given a string containing only the characters 'x' and 'y', find whether there are the same number of 'x's and 'y's.

*/

// init vars
var args = process.argv.slice(2);
var arr = [];
var numX = 0;
var numY = 0;

// Operation
function balanced(str){
	// init vars
	arr = str.split('');
	numX = 0;
	numY = 0;

	// Count num of 'x's and 'y's
	for(var i = 0; i < arr.length; i++){
		if(arr[i] ==='x'){
			numX++;
		} else if(arr[i] === 'y'){
			numY++;
		}
	}

	// Return if equivalent
	if(numX === numY){
		return true;
	} else {
		return false;
	}
}


// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		out = "";

		// Test for invalid inputs and skip
		if(/[^xyXY]+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n) + "]. Only 'x' or 'y' Allowed. Continuing...\n-----");
			continue;
		}

		// Output
		console.log("String: " + args[n] +  "\n" + balanced(args[n].toLowerCase()) + "\n");
	}

}	else {
	console.log("Missing arguments. Input a String with 'x's and 'y's");
}
