// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

function truncateString(str, num) {
	// return str.length > num ? str.substr(0, num) + '...' : str;
	// return str.length > num ? str.substring(0, num) + '...' : str;
	// return str.length > num ? str.slice(0, num) + '...' : str;
	// return str.length > num ? str.replace(0, num) + '...' : str;
	return str.length > num ? str.split('').splice(0, num).join('').concat('...') : str;

	// let output = [];
	// if (str.length > num) {
	// 	for (let i = 0, y = num; i < y; i++) {
	// 		output.push(str[i]);
	// 	}
	// 	return output.join('') + ('...');
	// }
	// return str;

}

console.log(truncateString('abc', 2));
console.log(truncateString('abcdef', 4));
