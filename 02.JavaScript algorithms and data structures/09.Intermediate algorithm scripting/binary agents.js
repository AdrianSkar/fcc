// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

function binaryAgent(str) {
	// let arr = str.split(' ');
	// let toAscii = val => {
	// 	//? improve this
	// 	let temp = Array.from(val).reverse();
	// 	for (let index in temp) {
	// 		temp[index] = temp[index] > 0 ? Math.pow(2, index) : 0;
	// 	}
	// 	return temp.reduce((acc, curr) => acc + curr);
	// };
	// // Spread the array with ascii codes and do the String.from instead of 
	// // doing the String.from for every char and then joining
	// return String.fromCharCode(...arr.map(value => toAscii(value)));

	//* mapped values
	let decEquiv = [128, 64, 32, 16, 8, 4, 2, 1];
	let newArr = str.split(' ');
	newArr = newArr.map(value => {
		let temp = value.split('');
		for (let i in temp) {
			temp[i] = temp[i] * decEquiv[i];
		}
		return temp.reduce((acc, cuur) => acc + cuur);
	});
	return String.fromCharCode(...newArr);
}

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")); // I love freecodecamp

/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-binary-agents/14273

function binaryAgentF(str) {
	//* parseInt(str [, radix]) + for
	// let biString = str.split(' '), uniString = [];
	// // radix param of parseInt
	// for (let i = 0; i < biString.length; i++) {
	// 	uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
	// }
	// return uniString.join('');

	//* double for + pow
	// str = str.split(' ');
	// let power, decValue = 0, sentence = '';
	// for (let s = 0; s < str.length; s++) {
	// 	for (let t = 0; t < str[s].length; t++) {
	// 		if (Number(str[s][t]) === 1) {
	// 			power = Math.pow(2, +str[s].length - t - 1);
	// 			decValue += power;
	// 		}
	// 	}
	// 	sentence += String.fromCharCode(decValue);
	// 	decValue = 0;
	// }
	// return sentence;

	//* spread + map
	console.log(...str.split(' '));
	return String.fromCharCode(...str.split(' ').map(char => parseInt(char, 2)));
}

console.log(binaryAgentF("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")); // I love freecodecamp