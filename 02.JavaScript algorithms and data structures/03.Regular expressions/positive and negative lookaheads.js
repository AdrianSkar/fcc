/* 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead

Instructions:
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
Your regex should use two positive lookaheads.
*/

// let myRegex = /^\D(?=\w{4,})(?=\w*\d{2,})/;
let myRegex = /^\D(?=\w{4,})(?=\w*\d{2,})/;

console.log('Match', myRegex.test('bana12'));
console.log('Match', myRegex.test('abc123'));
console.log('Match', myRegex.test('ast1on11aut'));
console.log('Match', myRegex.test('a12as'));

console.log("Don't match", myRegex.test('1234'));
console.log("Don't match", myRegex.test('8pass99'));
console.log("Don't match", myRegex.test('12abcde'));
console.log("Don't match", myRegex.test('a12'));
console.log("Don't match", myRegex.test('a12a'));
console.log("Don't match", myRegex.test('aa12'));
console.log("Don't match", myRegex.test('aa1a2'));

let fccReg = /^\D(?=\w{5})(?=\w*\d{2})/;
/* 
/// Doesn't comply with instructions?
/^\D(?=\w{5})(?=\w*\d{2})/;
	- (?=\w{5}) matches exactly 'n' chars not 5 or more 
*/

console.log('Match', fccReg.test('bana12'));
console.log('Match', fccReg.test('abc123'));
console.log('Match', fccReg.test('ast1on11aut'));

console.log("Don't match", fccReg.test('1234'));
console.log("Don't match", fccReg.test('8pass99'));
console.log("Don't match", fccReg.test('12abcde'));
console.log("Don't match", fccReg.test('a12'));
