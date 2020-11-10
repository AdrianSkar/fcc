/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

Instructions:
Modify the function using a for loop to return a filtered version of the passed
array such that any array este within arr containing elem has been removed.
*/

function filteredArray(arr, elem) {
	let newArr = [];
	// Only change code below this line
	for (const value of arr) {
		if (value.indexOf(elem) === -1) {
			newArr.push(value);
		}
	}
	// Only change code above this line
	return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));