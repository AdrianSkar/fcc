// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
	// return num > 0 ? str.repeat(num) : '';

	let output = '';
	for (let i = 0; i < num; i++) {
		output = output.concat('', str);
	}
	return output;
}

console.log(repeatStringNumTimes('Test', 3));// TestTestTest
console.log(repeatStringNumTimes('abc', -2));// ''

// fcc's hints https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-repeat-a-string-repeat-a-string/16041

function repeatStringNumTimesF(str, num) {
	/// while & +=
	let accumulatedStr = '';
	// while (num > 0) {
	// 	accumulatedStr += str;
	// 	num--;
	// }
	// return accumulatedStr;

	///recursion:
	// if (num < 1) { return ''; }
	// else if (num === 1) { return str; }
	// else if (num > 1) { return str + repeatStringNumTimesF(str, num - 1); }
	//or:
	// return num > 0 ? str + repeatStringNumTimesF(str, num - 1) : '';

	//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-repeat-a-string-repeat-a-string/16041/16?u=adrianskar answer:
	if (num <= 0) return "";
	return new Array(num + 1).join(str);
}

console.log(repeatStringNumTimesF('Test', 3));
console.log(repeatStringNumTimesF('abc', -2));