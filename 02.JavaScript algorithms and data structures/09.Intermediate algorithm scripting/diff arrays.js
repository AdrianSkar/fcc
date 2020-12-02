// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays 

function diffArray(arr1, arr2) {
	// let newArr = [];
	// arr1.forEach(val => {
	// 	if (!(arr2.includes(val))) {
	// 		newArr.push(val);
	// 	}
	// });
	// arr2.forEach(val => {
	// 	if (!(arr1.includes(val))) newArr.push(val);
	// });
	// return newArr;

	// let newArr = [];
	// let bigger = (arr1.length > arr2.length) ? arr1.length : arr2.length;
	// for (let i = 0; i <= bigger; i++) {
	// 	if (!arr1.includes(arr2[i]) && arr2[i] !== undefined) newArr.push(arr2[i]);
	// 	if (!arr2.includes(arr1[i]) && arr1[i] !== undefined) newArr.push(arr1[i]);
	// }
	// return newArr;

	// let newArr = [];
	// let check = (a, b) => a.forEach(val => (!b.includes(val)) ? newArr.push(val) : undefined);
	// check(arr1, arr2);
	// check(arr2, arr1);
	// return newArr;

	// let whole = Array.from(new Set([...arr1, ...arr2])), unique = [];
	// for (let val of whole) {
	// 	if (!(arr1.includes(val)) || !(arr2.includes(val))) unique.push(val);
	// }
	// return unique;

	// let whole = [...arr1, ...arr2], out = [];
	// for (let index in whole) {
	// 	if (whole.indexOf(whole[index]) === whole.lastIndexOf(whole[index])) {
	// 		out.push(whole[index]);
	// 	}
	// }
	// return out;

	let whole = [...arr1, ...arr2];
	return whole.filter(val => whole.indexOf(val) === whole.lastIndexOf(val));

}

console.log(diffArray([1, 2, 3], [1, 2]));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 5], [1, 2, 30, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

/// fcc's hints:
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-diff-two-arrays/16008

function diffArrayF(arr1, arr2) {
	// return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
	// // or:
	return [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item));

	// return [...diff(arr1, arr2), ...diff(arr2, arr1)];
	// function diff(a, b) { return a.filter(item => b.indexOf(item) === -1); }

	// let newArr = [];
	// for (let i = 0; i < arr1.length; i++) {
	// 	for (var j = 0; j < arr2.length; j++) {
	// 		if (arr2[j] === arr1[i]) {
	// 			arr2.splice(j, 1);
	// 			arr1.splice(i, 1);
	// 			j--;
	// 		}
	// 	}
	// }
	// newArr = arr1.concat(arr2);
	// return newArr;


}
console.log(diffArrayF([1, 2, 3], [1, 2]));
console.log(diffArrayF([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArrayF([1, 2, 3, 5], [1, 2, 30, 4, 5]));
console.log(diffArrayF(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

