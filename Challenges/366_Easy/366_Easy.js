/* 
---- Run in CMD as 'node filename.js (String String) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/98ufvz/20180820_challenge_366_easy_word_funnel_1/

	Challenge #366 [Easy] Word funnel 1
	-----------
	Description
		
		Given two strings of letters, determine whether the second can be made from the first by removing one letter. 
		The remaining letters must stay in the same order.

	Example 
		-----
			funnel("leave", "eave")     => true
			funnel("reset", "rest")     => true
			funnel("dragoon", "dragon") => true
			funnel("eave", "leave")     => false
			funnel("sleet", "lets")     => false
			funnel("skiff", "ski")      => false
		-----
*/

// init vars
var args = process.argv.slice(2);
var strArr1 = [];
var strArr2 = [];
var removed = null;

// Operation
function funnel(str1, str2){

	// init vars
	strArr1 = str1.split('');
	strArr2 = str2.split('');
	removed = -1;
	
	// check if possible
	if(strArr1.length !== strArr2.length + 1){
		return false;
	}

	// main operation
	for(let i = 0; i < strArr2.length; i++){
		if(removed === -1){
			if(strArr1[i] !== strArr2[i]){
				removed = i;
			}
		} else if(strArr1[i+1] !== strArr2[i]){
			return false;
		}
	}

	// on successful check
	if(removed !== -1) {
		return true;
	} else {
		// ERROR
		return null;
	}
}

// args[i] is an input
if(args.length > 0){

	for (var n = 0; n < args.length-1; n +=2){
		out = "";

		// Test for invalid inputs and skip
		if(/\W+/.test(args[n]) || /\W+/.test(args[n+1])){
			console.log("-----\nInvalid Input at [" + (n) + ", " + (n+1) + "]. Only Strings Allowed. Continuing...\n-----");
			args.splice(n,2);
			n-=2;
			continue;
		}
	}
}

// Default output
console.log('funnel("leave", "eave")    \t=> ' + funnel("leave", "eave"));
console.log('funnel("reset", "rest")    \t=> ' + funnel("reset", "rest"));
console.log('funnel("dragoon", "dragon")\t=> ' + funnel("dragoon", "dragon"));
console.log('funnel("eave", "leave")    \t=> ' + funnel("eave", "leave"));
console.log('funnel("sleet", "lets")    \t=> ' + funnel("sleet", "lets"));
console.log('funnel("skiff", "ski")     \t=> ' + funnel("skiff", "ski"));

for(let j = 0; j < args.length-1; j+=2){
	console.log('funnel("' + args[j] +'", "' + args[j+1] + '")\t=> ' + funnel(args[j], args[j+1]));
}
