/* 
---- Run in CMD as 'node filename.js (String) ...' ----
*/

/*
	FROM: https://www.reddit.com/r/dailyprogrammer/comments/99d24u/20180822_challenge_366_intermediate_word_funnel_2/

	Challenge #366 [Intermediate] Word funnel 2
	
	Challenge

		A word funnel is a series of words formed by removing one letter at a time from a starting word, keeping the remaining letters in order. 
		For the purpose of this challenge, a word is defined as an entry in the enable1 word list. 

		An example of a word funnel is:
		-----
			gnash => gash => ash => ah
		-----

		This word funnel has length 4, because there are 4 words in it.

		Given a word, determine the length of the longest word funnel that it starts. 
		You may optionally also return the funnel itself (or any funnel tied for the longest, in the case of a tie).
	
	Examples
		-----
			funnel2("gnash")      => 4
			funnel2("princesses") => 9
			funnel2("turntables") => 5
			funnel2("implosive")  => 1
			funnel2("programmer") => 2
		-----
*/
const fs = require('fs');

// init vars
var args = process.argv.slice(2);
var data = fs.readFileSync("../../Assets/enable1.txt", "utf-8").split('\n');

// Operation
function funnel(str, num = 1){
	
	// init vars
	let temp = "";
	let best = num;
	let current = 0;
	
	// default case
	if(str.length <2) {
		return num;
	}

	// main operation
	for(let i = 0; i < str.length; i++){
		temp = str.substring(0, i) + str.substring(i+1, str.length);
		if (binarySearch(data, temp)>=0){
			current = funnel(temp, num+1);
			if(current>best){
				best = current;
			}
		}
	}
	return best;
}


// compare
function compare(str1, str2){
	if(str1>str2){
		return 1;
	} else if(str1<str2){
		return -1;
	} else {
		return 0;
	}
}

// binary search
function binarySearch(arr, el) {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        let mid = (hi + lo) >>1;
        let cmp = compare(el, arr[mid]);
        if (cmp > 0) {
            lo = mid + 1;
        } else if(cmp < 0) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }
    return -lo - 1;
}

// args[i] is an input
if(args.length > 0){
	for (var n = 0; n < args.length-1; n +=2){
		// Test for invalid inputs and skip
		if(/\W+/.test(args[n])){
			console.log("-----\nInvalid Input at [" + (n) + "]. Only Strings Allowed. Continuing...\n-----");
			args.splice(n);
			n--;
			continue;
		}
	}
}

// Deafult output
console.log('funnel("gnash")      => ' + funnel("gnash"));	    //4
console.log('funnel("princesses") => ' + funnel("princesses"));	//9
console.log('funnel("turntables") => ' + funnel("turntables"));	//5
console.log('funnel("implosive")  => ' + funnel("implosive"));	//1
console.log('funnel("programmer") => ' + funnel("programmer"));	//2

for(let j = 0; j < args.length; j++){
	console.log('funnel( + args[j] +)\t=>' + funnel(args[j]));
}
