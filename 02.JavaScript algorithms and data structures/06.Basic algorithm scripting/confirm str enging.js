// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

function confirmEnding(str, target) {

	// return str.substr(-target.length) === target;
	// return str.substring(str.length - target.length) === target;
	// return str.endsWith(target); 
	return str.lastIndexOf(target) === str.length - target.length;

}

console.log(confirmEnding("Bastian", 'an'));//true
console.log(confirmEnding("Connor", 'n'));//false

/// fcc's hints:

function confirmEndingF(str, target) {
	// return str.slice(str.length - target.length) === target;
	return str.slice(-target.length) === target;

	// Using regex:
	// let reg = new RegExp(target + '$', 'i'); // Ending in target, case insensitive
	// return reg.test(str);
}
console.log(confirmEndingF('Bastian', 'n'));//true
console.log(confirmEndingF('Connor', 'n'));//false