// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

function reverseString(str) {
	// return Array.from(str).reverse().join('').toString();
	let output = '';
	for (i = str.length - 1; i >= 0; i--) {
		console.log(str[i]);
		output = output.concat(str[i]);
		// output += str[i];
	}
	return output;
}

console.log(reverseString("hello"));



// Fcc's solution:

function reverseStringF(str) {
	return str.split('').reverse().join('');
}
console.log(reverseStringF('olleh'));
