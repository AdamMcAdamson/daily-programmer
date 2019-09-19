/* 
---- Run in CMD as 'node filename.js (int) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/cdieag/20190715_challenge_379_easy_progressive_taxation/

	Challenge #379 [Easy] Progressive taxation
	-----------
	Description
		
		The nation of Examplania has the following income tax brackets:
			income cap      marginal tax rate
			 ¤10,000            0.00 (0%)
			 ¤30,000            0.10 (10%)
			 ¤100,000           0.25 (25%)
			    --              0.40 (40%)

	  Given a whole-number income amount up to ¤100,000,000, find the amount of tax owed in Examplania. Round down to a whole number of ¤.

  Optional improvement

		One way to improve your code is to make it easy to swap out different tax brackets, for instance by having the table in an input file. 
		If you do this, you may assume that both the income caps and marginal tax rates are in increasing order,
		the highest bracket has no income cap, and all tax rates are whole numbers of percent (no more than two decimal places).
*/

// init vars
const taxBracket = require('./TaxBracket.js');
var args = process.argv.slice(2);
var grossIncome = -1;
var working = 0;
var taxes = 0;


// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		// Test for invalid inputs and skip
		if(/\D+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (i) + "]. Numbers Only. Continuing...\n-----");
			continue;
		}  else if(args[n] > 100000000){
			console.log("-----\nInvalid Input at [" + (i) + "]. Number is too large. Continuing...\n-----");
			continue;
		}

// -------------

		// Initial values
		grossIncome = args[n];
		working = 0;
		taxes = 0;

		// Operation
		for(var i = 0; i < taxBracket.length; i ++){
			if (grossIncome < taxBracket[i][0]) {
				taxes += parseInt((grossIncome-working)*taxBracket[i][1]);
				break;
			} else {
				taxes += parseInt((taxBracket[i][0]-working) * taxBracket[i][1]);
				working = parseInt(taxBracket[i][0]);
			}
		}

		// Output
		console.log("Gross:\n" + grossIncome + "\nTaxes:\n" + parseInt(taxes) +"\n");

// -------------
	
	}
} else {
	console.log("Missing arguments. Input a Number")
}