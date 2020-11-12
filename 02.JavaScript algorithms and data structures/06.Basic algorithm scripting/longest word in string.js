// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
	// let result = str.split(' '), count = 0;
	// for (let value of result) {
	// 	value.length > count ? count = value.length : true;
	// }
	// return count;
	let count = 0;
	for (let value of str.split(' ')) {
		value.length > count ? count = value.length : count = count;
	}
	return count;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));


/// Fcc's solutions https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-find-the-longest-word-in-a-string/16015

// reduce:
function findLongestWordLengthB(str) {
	return str.split(' ').reduce(
		function (x, y) {
			return Math.max(x, y.length);
		}, 0);
}
console.log(findLongestWordLengthB('a bc def'));

// map:
function findLongestWordLengthC(str) {
	return Math.max(...str.split(' ').map(word => word.length));
	// '...' passes the word.lengths array to Math.max as argument
	// console.log(Math.max([1, 23]));
	// console.log(Math.max(...[1, 23]));
}
console.log(findLongestWordLength('ss sdfgd sdfgdfsgfdsg'));

// recursion:
function findLongestWordLengthD(str) {
	//split the string into individual words
	//(important!!, you'll see why later)
	str = str.split(" ");

	//str only has 1 element left that is the longest element,
	//return the length of that element
	if (str.length == 1) {
		return str[0].length;
	}

	//if the first element's length is greater than the second element's (or equal)
	//remove the second element and recursively call the function)
	if (str[0].length >= str[1].length) {
		str.splice(1, 1);
		return findLongestWordLength(str.join(" "));
	}

	//if the second element's length is greater than the first element's start
	//call the function past the first element
	if (str[0].length <= str[1].length) {
		// from the first element to the last element inclusive.
		return findLongestWordLength(str.slice(1, str.length).join(" "));
	}
}

console.log(findLongestWordLengthD('a abc abcde'));