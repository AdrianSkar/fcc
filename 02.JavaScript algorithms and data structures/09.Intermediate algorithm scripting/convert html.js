//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

//? Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
	let pairs = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;'
	};
	// return [...str].map(value => value.replace(value, pairs[value] || value)).join('');

	return [...str].map(value => pairs[value] ? pairs[value] : value).join('');

	let out = str;
	// for (let value of [...str]) {
	// 	if (pairs[value]) {
	// 		out = out.replace(value, pairs[value]);
	// 	}
	// }
	return out;
}

// console.log(convertHTML('Dolcen & Gambino'));
console.log(convertHTML('Sixty > twelve'));
// console.log(convertHTML("Schindler's list"));
console.log(convertHTML("<>"));

/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-convert-html-entities/16007

function convertHTMLF(str) {
	/// switch
	// let temp = str.split('');
	// for (let i = 0; i < temp.length; i++) {
	// 	switch (temp[i]) {
	// 		case '<':
	// 			temp[i] = "&lt;"
	// 			break;
	// 		case '>':
	// 			temp[i] = '&gt;'
	// 			break;
	// 		case '&':
	// 			temp[i] = '&amp;'
	// 			break;
	// 		case "'":
	// 			temp[i] = '&apos;'
	// 			break;
	// 		case '"':
	// 			temp[i] = '&quot;'
	// 			break;
	// 	}
	// }
	// temp = temp.join('');
	// return temp;

	/// regex
	const htmlEntities = {
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		"'": '&apos;',
		'"': '&quot;'
	};
	return str.replace(/[<>&'\"]/g, match => htmlEntities[match]); //2nd arg is a function that returns the matched character
}
// console.log(convertHTMLF('Dolcen & Gambino'));
console.log(convertHTMLF('Sixty > twelve'));
// console.log(convertHTMLF("Schindler's list"));
console.log(convertHTMLF("<>"));

