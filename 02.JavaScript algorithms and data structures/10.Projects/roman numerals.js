// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
	let pairs = {
		1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX',
		10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC',
		100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M', 2000: 'MM', 3000: 'MMM'
	};

	// If we have it, return it
	if (pairs.num) return pairs[num];

	//* Separating the number into digits (eg: 501 -> [5, 0, 1])
	// // Separate the numbers into an array
	// let arr = String(num).split('').map(val => Number(val));

	// // Without looping (crude): 
	// // if (arr[arr.length - 1]) arr[arr.length - 1] = pairs[arr[arr.length - 1]];
	// // if (arr[arr.length - 2]) arr[arr.length - 2] = pairs[arr[arr.length - 2] * 10];
	// // if (arr[arr.length - 3]) arr[arr.length - 3] = pairs[arr[arr.length - 3] * 100];
	// // if (arr[arr.length - 4]) arr[arr.length - 4] = pairs[arr[arr.length - 4] * 1000];

	// arr.forEach((val, idx) => {
	// 	// Exponentiate the value to the power of its distance to the smallest unit
	// 	// Eg [3,0,0]: arr[0] = 3 -> 3 * 100
	// 	let modifier = Math.pow(10, (arr.length - idx - 1));

	// 	// Assign the corresponding value
	// 	arr[idx] = pairs[val * modifier];
	// });

	// // Filter falsy values
	// arr = arr.filter(Boolean);

	// // Join and return result
	// return arr.reduce((acc, curr) => acc.concat(curr));

	//* Separating the number into units (eg: 501 -> [500, 00, 1])
	// let arr = String(num).split('');
	// arr.forEach((val, idx) => {
	// 	// Add x 0's to val depending on its distance to the end
	// 	let test = val.padEnd(arr.length - idx, 0);

	// 	arr[idx] = pairs[test];
	// 	// OR: arr.splice(idx, 1, pairs[test]);
	// });
	// arr = arr.filter(Boolean);

	// return arr.reduce((acc, curr) => acc + curr);
}

// console.log(convertToRoman(1));
// console.log(convertToRoman(51));
// console.log(convertToRoman(20));
// console.log(convertToRoman(3));
// console.log(convertToRoman(5));
// console.log(convertToRoman(7));
// console.log(convertToRoman(100));
console.log(convertToRoman(501));// DI
// console.log(convertToRoman(3999));// MMMCMXCIX


//______________________________________________________________________________


/// fcc's solutions:
function convertToRomanF(num) {
	//* Solution 1
	// let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	// let romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	// let romanized = '';

	// for (let i = 0; i < decimalValue.length; i++) {
	// 	console.log(decimalValue[i]);
	// 	console.log(decimalValue[i] <= num);
	// 	while (decimalValue[i] <= num) {
	// 		romanized += romanNumeral[i];
	// 		num -= decimalValue[i];
	// 	}
	// }
	// return romanized;

	//* Solution 2
	// var romans = ["I", "V", "X", "L", "C", "D", "M"],
	// 	ints = [],
	// 	romanNumber = [],
	// 	numeral = "",
	// 	i;
	// // Creates a reversed array of single digits 
	// while (num) {
	// 	ints.push(num % 10);
	// 	console.log(ints);
	// 	console.log(Math.floor(num / 10));
	// 	num = Math.floor(num / 10);
	// }
	// for (i = 0; i < ints.length; i++) {
	// 	console.log(ints[i]);
	// 	units(ints[i]);
	// }
	// function units() {
	// 	numeral = romans[i * 2];
	// 	switch (ints[i]) {
	// 		case 1:
	// 			romanNumber.push(numeral);
	// 			break;
	// 		case 2:
	// 			romanNumber.push(numeral.concat(numeral));
	// 			break;
	// 		case 3:
	// 			romanNumber.push(numeral.concat(numeral).concat(numeral));
	// 			break;
	// 		case 4:
	// 			romanNumber.push(numeral.concat(romans[i * 2 + 1]));
	// 			break;
	// 		case 5:
	// 			romanNumber.push(romans[i * 2 + 1]);
	// 			break;
	// 		case 6:
	// 			romanNumber.push(romans[i * 2 + 1].concat(numeral));
	// 			break;
	// 		case 7:
	// 			romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
	// 			break;
	// 		case 8:
	// 			romanNumber.push(
	// 				romans[i * 2 + 1]
	// 					.concat(numeral)
	// 					.concat(numeral)
	// 					.concat(numeral)
	// 			);
	// 			break;
	// 		case 9:
	// 			romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
	// 	}
	// }
	// return romanNumber.reverse().join("").toString();

	//* Solution 3
	// var romans = [
	// 	// 10^i 10^i*5
	// 	["I", "V"], // 10^0
	// 	["X", "L"], // 10^1
	// 	["C", "D"], // 10^2
	// 	["M"] // 10^3
	// ],
	// 	digits = num
	// 		.toString()
	// 		.split("")
	// 		.reverse()
	// 		.map(function (item, index) {
	// 			return parseInt(item);
	// 		}),
	// 	numeral = "";
	// console.log(digits);
	// // Loop through each digit, starting with the ones place
	// for (var i = 0; i < digits.length; i++) {
	// 	// Make a Roman numeral that ignores 5-multiples and shortening rules
	// 	numeral = romans[i][0].repeat(digits[i]) + numeral;
	// 	console.log(numeral);
	// 	// Check for a Roman numeral 5-multiple version
	// 	if (romans[i][1]) {

	// 		numeral = numeral
	// 			// Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
	// 			.replace(romans[i][0].repeat(5), romans[i][1])
	// 			// Shorten occurrences of 9 * 10^i
	// 			.replace(
	// 				romans[i][1] + romans[i][0].repeat(4),
	// 				romans[i][0] + romans[i + 1][0]
	// 			)
	// 			// Shorten occurrences of 4 * 10^i
	// 			.replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
	// 	}
	// }
	// return numeral;

	//* Solution 4
	function getNumeral(digit, lowStr, midStr, nextStr) {
		switch (true) {
			case digit <= 3:
				return lowStr.repeat(digit);
			case digit === 4:
				return lowStr + midStr;
			case digit <= 8: // digits 5-8
				return midStr + lowStr.repeat(digit - 5);
			default: // digit 9
				return lowStr + nextStr;
		}
	}
	let str = '';

	// Thousands
	str += 'M'.repeat(Math.floor(num / 1000));
	num %= 1000;

	// Hundreds
	str += getNumeral(Math.floor(num / 100), 'C', 'D', 'M');
	num %= 100;

	// Tens
	str += getNumeral(Math.floor(num / 10), 'X', 'L', 'C');
	num %= 10;

	// Ones
	str += getNumeral(num, 'I', 'V', 'X');

	return str;

}
// console.log(convertToRomanF(501));// DI
console.log(convertToRomanF(29));// DI
// console.log(convertToRomanF(3999));// MMMCMXCIX
