// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr, num) {
	let hold = [...arr, num];// or Array.from([...arr, num]); or Array.of(...arr, num);
	// new Array(...arr, num ); won't work as if the only arg passed is a number it'll take it as length, not as an element to introduce.

	// return hold.sort((a, b) => a - b).findIndex(value => value === num);
	return hold.sort((a, b) => a - b).indexOf(num);

}
console.log(getIndexToIns([60, 40], 50));// 1
console.log(getIndexToIns([3, 10, 5], 3));// 0
console.log(getIndexToIns([5, 3, 20, 3], 5));// 2
console.log(getIndexToIns([], 1));// 0 



// fcc's hints: 
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-where-do-i-belong/16094

function getIndexToInsF(arr, num) {
	// let count = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	if(num>arr[i])		count++;
	// }
	// return count;

	return arr.filter(val => num > val).length;
}

console.log(getIndexToInsF([60, 40], 50));// 1
console.log(getIndexToInsF([3, 10, 5], 3));// 0
console.log(getIndexToInsF([5, 3, 20, 3], 5));// 2
console.log(getIndexToInsF([], 1));// 0 
