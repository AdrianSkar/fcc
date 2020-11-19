//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

function frankenSplice(arr1, arr2, n) {

	// let output = arr2.slice(0, n);
	// output.push(arr1);
	// output.push(arr2.slice(n));
	// return output.flat();

	// let output = [...arr1];
	// output.unshift(arr2.slice(0, n));
	// output.push(arr2.slice(n));
	// return output.flat();

	// let output = [...arr2], tail = arr2.slice(n);
	// output.splice(n, output.length, arr1);
	// output.push(tail);
	// return output.flat();

	// return new Array(...arr2.slice(0, n), ...arr1, ...arr2.slice(n));
	return new Array(arr2.slice(0, n), arr1, arr2.slice(n)).flat();
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));// [4,1,2,3,5]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));// ["head", "shoulders", "claw", "tentacle", "knees", "toes"]


/// fcc hints:
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-slice-and-splice/301148

function frankenSpliceF(arr1, arr2, n) {
	// let localArray = arr2.slice(); // or Array.from(arr2) or [...arr2]
	// for (let i = 0; i < arr1.length; i++) {
	// 	localArray.splice(n, 0, arr1[i]);
	// 	n++; // increments index at which we insert arr1[i];
	// }
	// return localArray;

	// let localArr = arr2.slice();
	// localArr.splice(n, 0, ...arr1);
	// return localArr;

	return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
}

console.log(frankenSpliceF([1, 2, 3], [4, 5], 1));// [4,1,2,3,5]
console.log(frankenSpliceF(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));// ["head", "shoulders", "claw", "tentacle", "knees", "toes"] 