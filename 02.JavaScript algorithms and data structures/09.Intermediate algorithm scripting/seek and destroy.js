// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr) {
	// let targets = [...arguments].slice(1);
	// return arr.filter(value => !targets.includes(value));

	// let targets = [...arguments].slice(1), output = [];
	// for (let i = 0, y = arr.length; i < y; i++) {
	// 	if (!targets.includes(arr[i])) output.push(arr[i]);
	// }
	// return output;

	// let targets = [...arguments].slice(1);
	// for (let i = 0, y = arr.length; i < y; i++) {
	// 	if (targets.includes(arr[i])) {
	// 		arr.splice(i, 1);
	// 		i--; //As you deleted that index it'll need to be checked again
	// 	}
	// }
	// return arr;

	// return arr.reduce((acc, curr) => {
	// 	[...arguments].slice(1).includes(curr) ? console.log('yes') : acc.push(curr);
	// 	return acc;
	// }, []);

	// let targets = [...arguments].slice(1), out = [];
	// arr.forEach(value => {
	// 	if (targets.indexOf(value) === -1) out.push(value);
	// });
	// return out;

	// let targets = [...arguments].slice(1);
	// return Array.from(arr.map(value => !targets.includes(value) ? value : false)).filter(Boolean);

	return arr.filter(value => ![...arguments].slice(1).includes(value));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53));


/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-seek-and-destroy/16046

// function destroyerF(arr) {
// let args = Array.prototype.slice.call(arguments); // Same as Array.from(arguments) or [...arguments]
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < args.length; j++) {
// 		if (arr[i] === args[j]) {
// 			delete arr[i];
// 		}
// 	}
// }
// return arr.filter(Boolean); // Filters empty (falsy) elements
// }

const destroyerF = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));

console.log(destroyerF([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyerF([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyerF(['tree', 'hamburger', 53], 'tree', 53));
