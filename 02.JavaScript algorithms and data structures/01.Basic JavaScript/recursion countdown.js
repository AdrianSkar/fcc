/// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
/// Hints: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925
// Only change code below this line
function countdown(n) {
	if (n < 1) { return []; }
	let size = n, arr = [];
	function fact(n) {
		arr.push(n);
		size--;
		if (size > 0) {
			fact(size);
		}
	}
	fact(n);
	return arr;
}
// Only change code above this line

console.log(countdown(10));


//______________________________________________________________________________

/// Using unshift:

function unshifting(n) {
	if (n < 1) {
		return [];
	}
	else {
		let arr = unshifting(n - 1);
		arr.unshift(n);
		return arr;
	}
}
console.log(unshifting(4));

/// Using concat and ternary operators

function cTer(n) {
	return (n < 1) ? [] : [n].concat(cTer(n - 1));
}
console.log(cTer(5));

/// Using splice

function splicing(n) {
	if (n < 1) { return []; }
	else {
		let arr = splicing(n - 1);
		arr.splice(0, 0, n);
		return arr;
	}
}
console.log(splicing(5));