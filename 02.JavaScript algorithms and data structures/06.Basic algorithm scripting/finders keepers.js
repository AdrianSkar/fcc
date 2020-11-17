// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

function findElement(arr, func) {

	for (const iterator of arr) {
		if (func(iterator)) {
			return iterator;
		}
	}
	return undefined;

}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 5, 3, 7], num => num % 2 === 0));

// fcc's hints:

function findElementF(arr, func) {
	// return arr.find(func);

	// let num = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	num = arr[i];
	// 	if (func(num)) {
	// 		return num;
	// 	}
	// }

	// return arr[arr.map(func).indexOf(true)];

	//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-finders-keepers/16016/5?u=adrianskar
	return arr.filter(func)[0];



}
console.log(findElementF([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElementF([1, 5, 3, 7], num => num % 2 === 0));