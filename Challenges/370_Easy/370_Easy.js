/* 
---- Run in CMD as 'node filename.js (int) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/a72sdj/20181217_challenge_370_easy_upc_check_digits/

	Challenge #372 [Easy] Perfectly balanced
	-----------
	Description
		
		Given an 11-digit number, find the 12th digit that would make a valid UPC. 
		You may treat the input as a string if you prefer, whatever is more convenient. 
		If you treat it as a number, you may need to consider the case of leading 0's to get up to 11 digits. 
		That is, an input of 12345 would correspond to a UPC start of 00000012345.

	Examples
		-----
			upc(4210000526)  => 4
			upc(3600029145)  => 2
			upc(12345678910) => 4
			upc(1234567)     => 0
		-----

*/

// init vars
var args = process.argv.slice(2);
var digits = [];
var evenIndex = 0;
var oddIndex = 0;
var out = 0;

// Operation
function upc(input){

	// init vars
	digits = input.toString().split('');
	evenIndex = 0;
	oddIndex = 0;
	out = 0;

	// insert leading '0's
	while(digits.length < 11){
		digits.unshift(0);
	}

	// Addition Loop
	for(let i = 0; i < digits.length; i++){
		if(i%2 === 0){
			evenIndex += parseInt(digits[i]);
		} else{
			oddIndex += parseInt(digits[i]);
		}
	}

	// Calculate UPC Digit
	out = evenIndex*3;
	out += oddIndex;
	out %= 10;
	if(out !== 0){
		out = 10 - out;
	}

	return out;
}

// default tests
console.log("upc(4210000526)  =>\t" + upc(4210000526));
console.log("upc(3600029145)  =>\t" + upc(3600029145));
console.log("upc(12345678910) =>\t" + upc(12345678910));
console.log("upc(1234567)     =>\t" + upc(1234567));

// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		out = "";

		// Test for invalid inputs and skip
		if(!/^\d{1,11}$/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n) + "]. Only 1-11 Digit Integers allowed. Continuing...\n-----");
			continue;
		}

		// Output
		console.log("upc(" + args[n] +  ")\t =>\t" + upc(args[n]));
	}
}

