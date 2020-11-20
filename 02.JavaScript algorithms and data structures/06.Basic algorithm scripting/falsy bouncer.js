// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

function bouncer(arr) {
	// return arr.filter(value => Boolean(value));
	// return arr.filter(value => value);

	let output = [];
	// for (let value of arr) {
	// 	Boolean(value) ? output.push(value) : undefined;
	// }

	arr.forEach(value => value ? output.push(value) : undefined);
	// arr.map(value => Boolean(value) ? output.push(value) : undefined);

	return output;

}

console.log(bouncer([7, "ate", "", false, 9]));// [7, 'ate', 9]
console.log(bouncer([false, null, 0, NaN, undefined, '']));// []

/// fcc's hints:
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-falsy-bouncer/16014

function bouncerF(arr) {

	// let newArray = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i]) newArray.push(arr[i]);
	// }
	// return newArray;

	return arr.filter(Boolean); // same as arr.filter(x => Boolean(x)) since Boolean is also a function that returns truthy/falsy

}

console.log(bouncerF([7, 'ate', '', false, 9]));
console.log(bouncerF([false, null, 0, NaN, undefined, '']));