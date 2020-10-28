// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups

/* /// Instructions:
		- Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.;
		- Reuse a capture group twice
		- 2 spaces separating 3 numbers
		- Shorthand for digits
 */

let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s+)\1\2\1$/; // Change this line
let result = reRegex.test(repeatNum);

console.log(result);

console.log('Match this: ', reRegex.test('100 100 100'));
console.log('Match this: ', reRegex.test('42 42 42'));
console.log('Match this: ', reRegex.test('10 10 10'));

console.log("Don't match this: ", reRegex.test('1 2 3'));
console.log("Don't match this: ", reRegex.test('101 102 103'));
console.log("Don't match this: ", reRegex.test('42 42 42 42'));