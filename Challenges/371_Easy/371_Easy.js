/* 
---- Run in CMD as 'node filename.js (int) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/ab9mn7/20181231_challenge_371_easy_n_queens_validator/

	Challenge #371 [Easy] N queens validator
	-----------
	Description
		
	For the purpose of this challenge, the N queens problem consists of putting one queen on every column
	(labeled a, b, c, ...) of an NxN chessboard, such that no two queens are in the same row or diagonal. 

	An example valid solution for N = 6 is:
		6  . . Q . . .
		5  . . . . . Q
		4  . Q . . . .
		3  . . . . Q .
		2  Q . . . . .
		1  . . . Q . .
		   a b c d e f

	In chess notation, the squares with queens in this solution are called a2, b4, c6, d1, e3, and f5. 
	We'll represent solutions by listing the rows that each column's queen appears in from left to right, 
	so this solution is represented as the array {2, 4, 6, 1, 3, 5}.
	
	Given an array of 8 integers between 1 and 8, determine whether it represents a valid 8 queens solution.

	You may optionally handle solutions for any N, not just N = 8.
	
*/

// init vars
var args = process.argv.slice(2);
var errorCount = 0;
var array = [];
var blocked = [[]];
var out = "";

// Operation
function qcheck(arr){
	// init vars
	array = validate(arr);
	blocked = [[]];

	// validation check
	if(array == null){
		return "Error, Invalid Values";
	}

	// Main loop
	for(let i = 0; i < array.length; i++){

		// Return invalid (false) if blocked
		if(blocked[0].includes(array[i])){
			// Same Row
			return false;
		}
		if(blocked[i].includes(array[i])){
			// Same Diagonal
			return false;
		}

		// Row Check
		if(blocked.length > 0){
			blocked[0].push(array[i]);
		} else {
			blocked[0] = [array[i]];
		}

		// Diagnose and record blocked diagonal spaces from L->R
		for(let j = 0; j < array.length; j++){

			// Top Diagonal
			if(array[i]+j <= array.length){
				// Handle undefined
				if(blocked.length > i+j){
					blocked[i+j].push(array[i]+j);
				} else{
					blocked[i+j] = [(array[i]+j)];
				}
			}
			// Bottom Diagonal
			if(array[i]-j >= 0){
				// Handle undefined
				if(blocked.length > i+j){
					blocked[i+j].push(array[i]-j);
				} else{
					blocked[i+j] = [(array[i]-j)];
				}
			}
		}
	}

	// Only reached on successful check
	return true;

}

// Validates correct input format
function validate(arr){
	let valArr = arr.map(Number);
	for(let j = 0; j < valArr.length; j ++){
		if(valArr[j] > valArr.length){
			return null;
		}
	}
	return valArr;
}

// args is input
if(args.length > 0){

	for (let n = 0; n < args.length; n ++){

		// Test for invalid inputs and skip
		if(/\D+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n + errorCount) + "]. Only numbers Allowed. Continuing...\n-----");
			args.splice(n);
			n--;
			errorCount++;
			continue;
		}
	}
}	else {
	// console.log("Missing arguments. Input row values of NxN board Left->Right");
}

if(args.length > 0){
	console.log(qcheck(args));
}

// Default Check
console.log(qcheck([4, 2, 7, 3, 6, 8, 5, 1])); // true
console.log(qcheck([2, 5, 7, 4, 1, 8, 6, 3])); // true
console.log(qcheck([5, 3, 1, 4, 2, 8, 6, 3])); // false
console.log(qcheck([5, 8, 2, 4, 7, 1, 3, 6])); // false
console.log(qcheck([4, 3, 1, 8, 1, 3, 5, 2])); // false
