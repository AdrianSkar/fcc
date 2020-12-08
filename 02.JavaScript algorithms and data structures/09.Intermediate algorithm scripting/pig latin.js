// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {

	// let cons = /^[^aeiou]+/, vowel = /^[aeiou]/;
	// if (str.match(cons)) { return str.substr(str.match(cons)[0].length) + str.match(cons)[0] + 'ay'; } // also cons.exec(str) is possible instead of str.mtach(cons)
	// else if (str.match(vowel)) { return str + 'way'; }

	// let cons = str.match(/^[^aeiou]+/), vowel = str.match(/^[aeiou]/);
	// if (cons) { return str.substr(cons[0].length) + cons[0] + 'ay'; }
	// else if (vowel) { return str + 'way'; }

	let cons = /^[^aeiou]+/;
	return (str.match(cons)) ? str.substr(str.match(cons)[0].length) + str.match(cons)[0] + 'ay' : str + 'way'; // or str.substring as you're only using the start param

	/// based on UTF-16 charcodes
	// let vowelsRange = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117];
	// let arr = [...str];
	// let firstOcurrence = arr.findIndex(value => vowelsRange.includes(value.charCodeAt(0)));

	// return vowelsRange.includes(str.charCodeAt(0)) ? str + 'way' :
	// 	firstOcurrence > 0 ?
	// 		str.substr(firstOcurrence) + str.substring(0, firstOcurrence) + 'ay' :
	// 		str + 'ay';

	// return firstOcurrence > -1 ?
	// 	firstOcurrence === 0 ?
	// 		str + 'way' : str.substr(firstOcurrence) + str.substring(0, firstOcurrence) + 'ay'
	// 	: str + 'ay';
}

console.log(translatePigLatin('glove')); //oveglay
// console.log(translatePigLatin('rythm')); //rhythmway
// console.log(translatePigLatin('california')); //aliforniacay
// console.log(translatePigLatin('consonant')); //onsonantay
console.log(translatePigLatin('algorithm')); //lgorithmway

///fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-pig-latin/16039

function translatePigLatinF(str) {
	// let consonantRegex = /^[^aeiou]+/;
	// let myConsonants = str.match(consonantRegex);
	// console.log(myConsonants);
	// return myConsonants !== null
	// 	? str
	// 		.replace(consonantRegex, '')
	// 		.concat(myConsonants)
	// 		.concat('ay')
	// 	: str.concat('way');

	return str
		.replace(/^[aeiou]\w*/, "$&way") // $& is a back-reference to the whole match
		.replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatinF('glove')); //oveglay
console.log(translatePigLatinF('rythm')); //rhythmway
console.log(translatePigLatinF('california')); //aliforniacay
console.log(translatePigLatinF('consonant')); //onsonantay
console.log(translatePigLatinF('algorithm')); //lgorithmway