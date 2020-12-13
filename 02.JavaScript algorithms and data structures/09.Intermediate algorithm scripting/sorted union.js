// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique() {
	// console.log(...arguments);
	/// set
	// let output = new Set();
	// [...arguments].forEach(value => value.forEach(inner => output.add(inner)));
	// return [...output]; // Array.from(output) or new Array(...output)

	// return [...new Set([...arguments].flat())];

	/// reduce and map
	// let test = Array.from(arguments).flat();
	// console.log(test);

	// // return test.reduce((acc, curr) => {
	// // 	if (!acc.includes(curr)) acc.push(curr)
	// // 	return acc;
	// // }, []);

	// let out = [];
	// test.map((value) => {
	// 	if (!out.includes(value)) {
	// 		out.push(value)
	// 		console.log(out);
	// 	}
	// })
	// return out;

	/// only loops

	let out = [], args = [...arguments];

	for (let i = 0; i < args.length; i++) {
		for (let j = 0; j < args[i].length; j++) {
			if (out.indexOf(args[i][j]) < 0) out.push(args[i][j]);
		}
	}
	return out;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));


/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sorted-union/16077

function uniteUniqueF() {
	// args = Array.prototype.slice.call(arguments);
	// let newArr = args.reduce((arrA, arrB) => {
	// 	return arrA.concat(
	// 		arrB.filter(i => arrA.indexOf(i) === -1)
	// 	)
	// })
	// return newArr;

	// let concatArr = [], i = 0;
	// while (arguments[i]) {
	// 	concatArr = concatArr.concat(arguments[i]);
	// 	i++;
	// }
	// let uniqueArray = concatArr.filter((item, pos) => {
	// 	return concatArr.indexOf(item) === pos;
	// })
	// return uniqueArray;

}

console.log(uniteUniqueF([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUniqueF([1, 2, 3], [5, 2, 1]));