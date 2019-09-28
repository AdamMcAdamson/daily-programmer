/* 
---- Run in CMD as 'node filename.js (int)'d'(int) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/8s0cy1/20180618_challenge_364_easy_create_a_dice_roller/

	Challenge #364 [Easy] Create a Dice Roller
	-----------
	Description - Reduced

		Make a dice roller.
		
	Formal Inputs & Outputs

	Input

		Your input will contain one or more lines, where each line will be in the form of "NdM"; for example:
		-----
			3d6
			4d12
			1d10
			5d4
		------

		If you've ever played D&D you probably recognize those, but for the rest of you, this is what those mean:

		The first number is the number of dice to roll, the d means "dice", it's used to split up the two numbers,
		and the second number is how many sides the dice have. So the above example of "3d6" means "roll 3, 6-sided dice". 
		Also, in D&D, not all the dice we roll are the normal cubes. A d6 is a 6-sided die, and a d20 has twenty sides.
		
	Output

		You should output the sum of all the rolls of that specified die, each on their own line. so if your input is "3d6",
		the output should look something like:
		-----
			14
		-----
		Just a single number, you rolled 3 6-sided dice, and they added up to 14.

	Bonus

		In addition to the sum of all dice rolls for your output, print out the result of each roll on the same line, 
		using a format that looks something like
		-----
			14: 6 3 5
			22: 10 7 1 4
			9: 9
			11: 3 2 2 1 3
		-----
*/

// init vars
var args = process.argv.slice(2);
var errorCount = 0;
var arr = [];
var working = 0;
var total = 0;
var out = "";

// Operation
function roll(str){

	// validate input
	if(!(/^\d+[d]\d+$/.test(str))){
		return null;
	}

	// init vars
	arr = str.split("d");
	total = 0;
	working = 0;
	out = "";

	// generate rolls and add
	for(let i = 0; i < arr[0]; i++){
		working = Math.ceil(Math.random()*arr[1]);
		out += ", " + working; 
		total += working;
	}

	// returns total and invidual rolls
	return total + "\t:  " + out;
}
	
// args is input
if(args.length > 0){

	for (let n = 0; n < args.length; n ++){

		// Test for invalid inputs and skip
		if(!(/^\d+[d]\d+$/.test(args[n]))){
			console.log("-----\nInvalid Input at [" + (n + errorCount) + "]. Only NdM allowed. Continuing...\n-----");
			args.splice(n);
			n--;
			errorCount++;
			continue;
		} else {
			console.log(args[n] + "\t:\t" + roll(args[n]));
		}
	}
}	else {
	// console.log("Missing arguments. Input row values of NxN board Left->Right");
}

// Default Challenge Input
var defaultInput = ["5d12", "6d4", "1d2", "1d8", "3d6", "4d20", "100d100"];

for(let j = 0; j < defaultInput.length; j++){
	console.log(defaultInput[j] + "\t:\t" + roll(defaultInput[j]));
}
