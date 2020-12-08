//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
	let regEx = /[A-Za-z]{1}[a-z]+/g; // match all words

	// return str.match(regEx).join('-').toLowerCase();

	// let output = [], test;
	// while ((test = regEx.exec(str)) !== null) {
	// 	output.push(test[0].toLowerCase());
	// }

	// let arr = [...str.matchAll(regEx)], output = [];
	// console.log(arr);
	// for (let value of arr) {
	// 	output.push(value[0].toLowerCase());
	// }
	// console.log(output);
	// return output.join('-');

	return [...str.matchAll(regEx)].reduce((acc, curr) => {
		acc.push(curr[0].toLowerCase());
		return acc;
	}, []).join('-');
}

// console.log(spinalCase('This Is Spinal tap'));
console.log(spinalCase('TheAndyGriffith_Show'));


/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-spinal-tap-case/16078

function spinalCaseF(str) {

	// const regex = /\s+|_+/g;
	// str = str.replace(/([a-z])([A-Z])/g, "$1 $2"); // replace low-upper for low-space-upper
	// return str.replace(regex, '-');

	// str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
	// return str.toLowerCase().split(/(?:_| )/).join('-'); // or /\s+|_+/ or /_| /

	// return str
	// 	.split(/\s|_|(?=[A-Z])/) // ' ', _ or positive lookahead of uppercase
	// 	.join('-')
	// 	.toLowerCase();

	return str.replace(/([a-z])([A-Z])|[_|\s]+/g, "$1-$2").toLowerCase();
}

console.log(spinalCaseF('This Is Spinal tap'));
console.log(spinalCaseF('TheAndyGriffith_Show'));
console.log(spinalCaseF('this_Is-SpinalCase iI'));