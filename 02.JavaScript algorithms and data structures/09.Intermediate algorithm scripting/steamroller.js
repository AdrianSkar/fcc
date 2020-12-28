// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

function steamrollArray(arr) {
	//* Recursive inner function
	// let output = [];
	// function deep(arr) {
	// 	while (arr.length > 0) {
	// 		if (Array.isArray(arr[0])) return deep(arr[0]);
	// 		else {
	// 			output.push(arr.shift());
	// 		}
	// 	}
	// 	return arr;
	// }
	// // Use [value] instead of value. Otherwise arr[0] will be undefined unless its inside
	// // an array.
	// arr.forEach(value => deep([value]));
	// return output;

	//* Loop + reduce
	let unWrap = arr => arr.reduce((acc, curr) => acc.concat(...curr), []);
	while (arr.some(value => Array.isArray(value))) {
		arr = unWrap([arr]);
	}
	return arr;

}

console.log(steamrollArray([1, [2, [3, [4]]]]));// [1,2,3,4]
// console.log(steamrollArray([[['a']], [['b']]]));// ['a','b']
// console.log(steamrollArray([1, {}, [3, [[4]]]]));// [1, {}, 3, 4]

/// fcc's hints 
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079

function steamrollArrayF(arr) {
	//* Recursive function
	// let flattenedArray = [];
	// let flatten = function (arg) {
	// 	if (!Array.isArray(arg)) {
	// 		flattenedArray.push(arg);
	// 	}
	// 	else {
	// 		for (let a in arg) {
	// 			flatten(arg[a]);
	// 		}
	// 	}
	// };
	// arr.forEach(flatten);
	// return flattenedArray;

	//* Recursive ternary
	// let flat = [].concat(...arr);
	// return flat.some(Array.isArray) ? steamrollArrayF(flat) : flat;

	//* Using strings
	// return arr
	// 	.toString()
	// 	.replace(",,", ",")
	// 	.split(',')
	// 	.map(v => {
	// 		if (v === "[object Object]") return {};
	// 		else if (isNaN(v)) return v;
	// 		else return parseInt(v);
	// 	});

	//* Pop + recursive
	let flatArr = [];
	const elem = arr.pop();
	return elem ? // any elements left?
		!Array.isArray(elem) // not arr
			// pass previous arr minus pop + popped + spread rest
			? steamrollArrayF([arr, elem, ...flatArr])
			// or pass arr.concat(popped) + prev results 
			: steamrollArray([arr.concat(elem), flatArr])
		// flatArr if no elements left
		: flatArr;

}

console.log(steamrollArrayF([1, [2, [3, [4]]]]));// [1,2,3,4]
console.log(steamrollArrayF([[['a']], [['b']]]));// ['a','b']
console.log(steamrollArrayF([1, {}, [3, [[4]]]]));// [1, {}, 3, 4]
