// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

function sumAll(arr) {
	// let out = 0;
	// arr.sort((a, b) => a - b);
	// for (let i = arr[0], y = arr[1]; i <= y; i++) {
	// 	out += i;
	// }
	// return out;

	arr.sort((a, b) => a - b);
	let out = (val) => val === arr[0] ? arr[0] : val + out(val - 1);
	return out(arr[1]);

}

console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));

/// fcc's hints;
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-numbers-in-a-range/16083

function sumAllF(arr) {

	//* Arithmetic approach:
	const a = Math.min(...arr);
	const b = Math.max(...arr);

	//get the count of nums between a and b + 1
	const numCount = Math.abs(a - b) + 1;

	// Arithmetic progression summing formula https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
	const sum = ((a + b) * numCount) / 2;
	return sum;

}
console.log(sumAllF([4, 1]));

function sumAllRecur([first, last]) {
	const step = first - last < 0 ? 1 : -1; // this makes input order irrelevant
	return first !== last ? first + sumAllRecur([first + step, last]) : first;
}
console.log(sumAllRecur([4, 1]));