/* 
---- Run in CMD as 'node filename.js (float) ...' ----
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

	Bonus

		Given a target overall tax rate, find the income amount that would be taxed at that overall rate in Examplania
*/

// init vars
const taxBracket = require('./TaxBracket.js');
var args = process.argv.slice(2);
var taxRate = -1;
var working = 0;
var taxes = 0;
var lowestIncome = 0;
var lowestTax = 0.00;
var middleIncome = -1;
var middleTax = -1.00;
var highestIncome = 100000000;
var highestTax = 0.00;



// -------------


// Gets total tax
function getTax(grossIncome){
	
	working = 0;
	taxes = 0;
		
	for(var i = 0; i < taxBracket.length; i ++){
		if (grossIncome < taxBracket[i][0]) {
			taxes += parseInt((grossIncome-working)*taxBracket[i][1]);
			break;
		} else {
			taxes += parseInt((taxBracket[i][0]-working) * taxBracket[i][1]);
			working = parseInt(taxBracket[i][0]);
		}
	}
	return parseInt(taxes);
}

// Gets income with the given overrall tax rate
function getIncomeByTaxRate(rate){

	lowestIncome = 0;
	highestIncome = 100000000;
	lowestTax = getTax(lowestIncome);
	highestTax = getTax(highestIncome);

	// Impossible tax rate
	if(rate > (highestTax/highestIncome)){
		return NaN;
	}

	// Binary Search
	while (lowestTax <= highestTax){
		middleIncome = Math.round((lowestIncome+highestIncome)/2);
		middleTax = getTax(middleIncome);

		// Rounding here is what determines accuracy
		if (Math.round((middleTax/middleIncome)*100000)/100000 < rate){
			lowestIncome = middleIncome;
			lowestTax = middleTax;
		} else if (Math.round((middleTax/middleIncome)*100)/100 > rate){
			highestIncome = middleIncome;
			highestTax = middleTax;
		} else {
			return middleIncome;
		}
	} 

}


// -------------


// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		// Test for invalid inputs and skip
		if(!/^[0][.][0-9]{1,2}$/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n) + "]. Two decimal floats only (ie 0.12). Continuing...\n-----");
			continue;
		}  else if(args[n] > 100000000){
			console.log("-----\nInvalid Input at [" + (n) + "]. Number is too large. Continuing...\n-----");
			continue;
		}
		
		// Output
		console.log("Rate:\n" + args[n] + "\nIncome:\n" + getIncomeByTaxRate(parseFloat(args[n])) + "\n");

	
	}
} else {
	console.log("Missing arguments. Input a Number")
}