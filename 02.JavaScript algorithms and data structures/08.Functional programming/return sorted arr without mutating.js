//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
	// Only change code below this line

	// return globalArray.concat([]).sort();
	// return globalArray.slice(0).sort();
	// return [...globalArray].sort();
	// return Array.from(arr).sort();
	// return Array.of(...arr).sort();
	return new Array(...arr).sort();

	// Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);
