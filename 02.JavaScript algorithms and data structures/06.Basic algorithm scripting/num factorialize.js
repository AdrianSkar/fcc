// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num) {
	if (num === 0) return 1;
	/// for:
	// let result = 1;
	// for (let i = num; i > 1; i--) {
	// 	result *= i;
	// }
	// return result;

	///recursion:
	return num * factorialize(num - 1);
}

console.log(factorialize(10));