// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

function largestOfFour(arr) {
	let output = [];
	// for (const segment of arr) {
	// 	output.push(Math.max(...segment));
	// }

	// traditional for:
	for (let i = 0, y = arr.length; i < y; i++) {
		{
			// let inner = arr[i].sort().reverse(); // Simple sort() won't work: 81 > 101
			// output.push(inner[0]);

			output.push(arr[i].reduce((a, b) => a > b ? a : b));
			// output.push(arr[i].sort((a, b)=> a - b).reverse()[0]);
		}
	}
	return output;
}

console.log(largestOfFour([[2, 3, 4, 5], [234, 2, 34, 55], [1234, 234, 22]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


/// fcc hints: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-return-largest-numbers-in-arrays/16042

function largestOfFourB(arr) {
	return arr.map(Function.apply.bind(Math.max, null));
}
console.log(largestOfFourB([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));