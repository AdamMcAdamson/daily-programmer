/* 
---- Run in CMD as 'node filename.js (string) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/8q96da/20180611_challenge_363_easy_i_before_e_except/

	Challenge #363 [Easy] I before E except after C
	-----------
	Background

		"I before E except after C" is perhaps the most famous English spelling rule. 

		For the purpose of this challenge, the rule says:
    -----
	    if "ei" appears in a word, it must immediately follow "c".
	    If "ie" appears in a word, it must not immediately follow "c".
		-----

		A word also follows the rule if neither "ei" nor "ie" appears anywhere in the word. 

		Examples of words that follow this rule are:
		-----
			fiery hierarchy hieroglyphic
			ceiling inconceivable receipt
			daily programmer one two three
		-----

		There are many exceptions that don't follow this rule, such as:
		-----
			sleigh stein fahrenheit
			deifies either nuclei reimburse
			ancient juicier societies
		-----

	Challenge

		Write a function that tells you whether or not a given word follows the "I before E except after C" rule.

*/

// init vars
var args = process.argv.slice(2);
var errorCount = 0;

// Operation
function check(str){
	// Condition regex
	return !/(([^c]ei)|(cie))/.test(str);
}

console.log('check("a")          \t=> ' + check("a"));
console.log('check("zombie")     \t=> ' + check("zombie"));
console.log('check("transceiver")\t=> ' + check("transceiver"));
console.log('check("veil")       \t=> ' + check("veil"));
console.log('check("icier")      \t=> ' + check("icier"));


// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length; n ++){
		out = "";

		// Test for invalid inputs and skip
		if(/\W+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n+errorCount) + "]. Only Strings Allowed. Continuing...\n-----");
			args.splice(n);
			n--;
			errorCount++;
			continue;
		}
		
		// Output
		console.log('check("' + args[n] +  '")\t=> ' + check(args[n].toLowerCase()));
	}

}	else {
	// console.log("Missing arguments. Input a String");
}
