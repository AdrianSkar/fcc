function chunkArrayInGroups(arr, size) {

	// let output = [], count = 0;
	// while (count < arr.length) {
	// 	output.push(arr.slice(count, count + size));
	// 	count += size;
	// }
	// return output;

	let output = [];
	while (arr.length > 0) {// or simply (arr.length)
		output.push(arr.splice(0, size));
	}
	return output;

}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 3));

// fcc's hints:
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005

function chunkArrayInGroupsF(arr, size) {
	// let temp = [], result = [];
	// for (i = 0; i < arr.length; i++) {
	// 	if (i % size !== size - 1) {
	// 		temp.push(arr[i]);
	// 		console.log(arr[i]);
	// 	}
	// 	else {
	// 		console.log(arr[i]);
	// 		temp.push(arr[i]);
	// 		result.push(temp);
	// 		temp = [];
	// 	}
	// }
	// if (temp.length > 0) result.push(temp);
	// return result;

	// console.log(Math.ceil(arr.length / size));
	// console.log(undefined * 2);
	// console.log([...Array(Math.ceil(arr.length / size))]);
	// return [...Array(Math.ceil(arr.length / size))].map((val, i) =>
	// 	arr.slice(i * size, (i + 1) * size)); // val is not used, i is index


	// let newArr = [];
	// let index = arr.length / size; // calc num of sub-arrays
	// for (let i = 0; i < index; i++) {
	// 	console.log(i, i * size, (i + 1) * size);
	// 	newArr[i] = arr.slice(i * size, (i + 1) * size);
	// }
	// return newArr;

	// let arr2 = [];
	// for (let i = 0; i < arr.length; i += size) {//loop through size intervals
	// 	arr2.push(arr.slice(i, i + size));
	// }
	// return arr2;

	if (arr.length <= size) {
		return [arr];
	} else {
		return [arr.slice(0, size)].concat(
			chunkArrayInGroupsF(arr.slice(size), size)
		);
	}

}

console.log(chunkArrayInGroupsF([1, 2, 3, 4, 5], 3));