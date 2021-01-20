// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
	//* Using ASCII chars
	// let arr = str.split('');
	// // Return letter from ASCII values +/- 13 depending on its position (before/after middle)
	// function transform(letter) {
	// 	let code = letter.charCodeAt(0);
	// 	return code < 78 ?
	// 		(String.fromCharCode(code + 13))
	// 		: (String.fromCharCode(code - 13));
	// }
	// // If value is a letter, apply transform(f) to it
	// arr.forEach((val, idx) => {
	// 	if (val.match(/[A-Z]/)) {
	// 		arr[idx] = transform(val);
	// 	}
	// });

	// return arr.join('');

	//* Mapping values (two arrs)
	// let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
	// let nop = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	// let arr = str.split('');

	// for (const idx in arr) {
	// 	if (arr[idx].match(/[A-Z]/)) {
	// 		if (abc.includes(arr[idx])) {
	// 			arr[idx] = nop[abc.indexOf(arr[idx])];
	// 		}
	// 		else {
	// 			arr[idx] = abc[nop.indexOf(arr[idx])];
	// 		}
	// 	}
	// }
	// return arr.join('');

	//* Mapping values (one arr)
	// let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	// 	arr = str.split('');

	// for (const idx in arr) {
	// 	if (arr[idx].match(/[A-Z]/)) {
	// 		let imHere = Number(abc.indexOf(arr[idx]));
	// 		if (imHere < 13) {
	// 			arr[idx] = abc[imHere + 13];
	// 		}
	// 		else {
	// 			arr[idx] = abc[imHere - 13];
	// 		}
	// 	}
	// }
	// return arr.join('');

	//* Mapping values (object)
	let abc = {
		'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U', 'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y', 'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C', 'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G', 'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K', 'Y': 'L', 'Z': 'M'
	};
	let arr = str.split('');

	arr.forEach((val, idx) => { // Could've used map
		if (val.match(/[A-Z]/)) {
			arr[idx] = abc[val];
		}
	});
	return arr.join('');
}

console.log(rot13('SERR PBQR PNZC')); // FREE CODE CAMP
// console.log(rot13('SERR CVMMN!')); // FREE PIZZA!


//______________________________________________________________________________

/// fcc's solutions

function rot13F(str) {
	//* Solution 1
	// // Split str into a character array
	// return (
	// 	str
	// 		.split("")
	// 		// Iterate over each character in the array
	// 		.map.call(str, function (char) {
	// 			// Convert char to a character code
	// 			var x = char.charCodeAt(0);
	// 			// Checks if character is not between A-Z
	// 			if (x < 65 || x > 90) {
	// 				return String.fromCharCode(x); // Return un-converted character
	// 			}
	// 			//N = ASCII 78, if the character code is less than 78, shift forward 13 places
	// 			else if (x < 78) {
	// 				return String.fromCharCode(x + 13);
	// 			}
	// 			// Otherwise shift the character 13 places backward
	// 			return String.fromCharCode(x - 13);
	// 		})
	// 		.join("")
	// ); // Rejoin the array into a string

	//* Solution 2
	// var rotCharArray = [];
	// var regEx = /[A-Z]/;
	// str = str.split("");
	// for (var x in str) {
	// 	if (regEx.test(str[x])) {
	// 		// A more general approach
	// 		// possible because of modular arithmetic
	// 		// and cyclic nature of rot13 transform
	// 		/// 'A' = 65
	// 		rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
	// 	} else {
	// 		rotCharArray.push(str[x].charCodeAt());
	// 	}
	// }
	// str = String.fromCharCode.apply(String, rotCharArray);
	// // str = String.fromCharCode.apply(null, rotCharArray);
	// return str;

	//* Solution 3
	// return str.replace(/[A-Z]/g, val =>
	// 	String.fromCharCode((val.charCodeAt() % 26) + 65));

	//* Solution 4
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return str
		.split('')
		.map(char => {
			const pos = alphabet.indexOf(char);
			return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
		})
		.join('');
}


console.log(rot13F('SERR PBQR PNZC')); // FREE CODE CAMP
// console.log(rot13F('SERR CVMMN!')); // FREE PIZZA!