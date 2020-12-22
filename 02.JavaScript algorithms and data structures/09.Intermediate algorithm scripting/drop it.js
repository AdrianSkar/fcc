//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

function dropElements(arr, func) {
	// while (!func(arr[0]) && arr.length > 0) {// remember to check arr.length > 0
	// 	arr.shift();
	// }
	// return arr;

	// // return (func(arr[0])) ? arr : (arr.slice(1).length < 2) ? [] : dropElements(arr.slice(1), func);
	// return (func(arr[0])) ? arr : (arr.length > 0) ? [] : dropElements(arr.slice(1), func);

	// // let test = arr.map(value => func(value)).indexOf(true);
	// let test = arr.findIndex(func);
	// return test > -1 ? arr.slice(test) : [];
}
console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));// [3,4]
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));// [1,0,1]
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));// []
console.log(dropElements([1, 2, 3], function (n) { return n > 0; }));// [1,2,3]


/// fcc's hints
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-drop-it/16010

function dropElementsF(arr, func) {
	//* for + shift
	// for (let i = 0, times = arr.length; i < times; i++) {
	// 	if (func(arr[i])) break;
	// 	else arr.shift();
	// }
	// return arr;

	//* findIndex + ternary
	return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}
console.log(dropElementsF([1, 2, 3, 4], function (n) { return n >= 3; }));// [3,4]
console.log(dropElementsF([0, 1, 0, 1], function (n) { return n === 1; }));// [1,0,1]
console.log(dropElementsF([1, 2, 3, 4], function (n) { return n > 5; }));// []
console.log(dropElementsF([1, 2, 3], function (n) { return n > 0; }));// [1,2,3]

