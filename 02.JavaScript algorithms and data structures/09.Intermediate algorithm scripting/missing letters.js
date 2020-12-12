// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
/// Return the missing letter or undefined

function fearNoLetter(str) {
	/// Array everthing
	// let alpha = [...'abcdefghijklmnopqrstuvwxyz'], start = alpha.indexOf(str[0]), output;
	// for (let i = 0; i < str.length; i++, start++) {
	// 	if (alpha[start] !== str[i]) {
	// 		output = alpha[start];
	// 		break;
	// 	}
	// }
	// return output;

	/// String based finding
	// let alpha = 'abcdefghijklmnopqrstuvwxyz', start = alpha.indexOf(str[0]);
	// let test = alpha.slice(start);
	// let result = [...test].filter(value => !str.includes(value));
	// return result[0];

	/// Regex
	// let alpha = 'abcdefghijklmnopqrstuvwxyz', start = alpha.indexOf(str[0]);
	// let test = new RegExp(`[^${str}]`, 'i'); // or ("[^" + str + "]")
	// return (alpha.slice(start).match(test)) ? alpha.slice(start).match(test)[0] : undefined;

	let alpha = 'abcdefghijklmnopqrstuvwxyz', start = alpha.indexOf(str[0]);
	return [...alpha.slice(start)].find(value => value.match(`[^${str}]`));
}
console.log(fearNoLetter('bce'));// d
console.log(fearNoLetter('stvwx'));// u
// console.log(fearNoLetter('abcdefghjklmno'));// i
// console.log(fearNoLetter('abcdefghijklmnopqrstuvwxyz'));// undefined


/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-missing-letters/16023

function fearNoLetterF(str) {
	// for (let i = 0; i < str.length; i++) {
	// 	let code = str.charCodeAt(i);
	// 	if (code !== str.charCodeAt(0) + i) {
	// 		return String.fromCharCode(code - 1);
	// 	}
	// }

	let compare = str.charCodeAt(0), missing;
	str.split('').map(function (letter, index) {
		if (str.charCodeAt(index) === compare) {
			compare++;
		}
		else { missing = String.fromCharCode(compare) }
	});
	return missing;
}

console.log(fearNoLetterF('bce'));// d
// console.log(fearNoLetterF('stvwx'));// u
	// console.log(fearNoLetterF('abcdefghjklmno'));// i
	// console.log(fearNoLetterF('abcdefghijklmnopqrstuvwxyz'));// undefined