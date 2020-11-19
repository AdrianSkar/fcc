//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

function titleCase(str) {
	/// Works only on lowercase words (not mixed/uppercase ones)
	// let newPhrase = [];
	// str = str.split(' ');
	// for (let word of str) {
	// 	let letters = word.split('');
	// 	letters[0] = letters[0].toUpperCase();
	// 	word = letters.join('');
	// 	newPhrase.push(word);
	// }
	// return newPhrase.join(' ');

	/// Works:
	// let newPhrase = [];
	// str = str.toLowerCase().split(' ');
	// for (let word of str) {
	// 	let newWord = [];
	// 	for (let letter in word) {
	// 		(letter == 0) ? newWord.push(word[letter].toUpperCase()) : newWord.push(word[letter]);
	// 	}
	// 	newPhrase.push(newWord.join(''));
	// }
	// return newPhrase.join(' ');

	/// Works2:
	// let output = [];
	// str = str.toLowerCase().split(' ');
	// for (let word of str) {
	// 	let regex = word[0];
	// 	word = word.replace(regex, regex.toUpperCase());
	// 	output.push(word);
	// }
	// return output.join(' ');

	/// Works3:
	let output = [];
	str = str.toLowerCase().split(' ');
	for (let word of str) {
		let newWord = word.split('');
		newWord.splice(0, 1, (word[0].toUpperCase()));
		output.push(newWord.join(''));
	}
	return output.join(' ');

}

// console.log(titleCase("I'm a little tea pot."));
console.log(titleCase("sHoRt AnD sToUt"));


/// fcc's hints:

// String.prototype.replaceAt = function(index, character) {
//   return (
//     this.substr(0, index) + character + this.substr(index + character.length)
//   );
// };

// function titleCase(str) {
//   var newTitle = str.split(" ");
//   var updatedTitle = [];
//   for (var st in newTitle) {
//     updatedTitle[st] = newTitle[st]
//       .toLowerCase()
//       .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//   }
//   return updatedTitle.join(" ");
// }

//* modified
// String.prototype.replaceMe = function () {
// 	return this.charAt(0).toUpperCase() + this.substr(1).toLowerCase();
// };

// function titleCaseF(str) {
// 	str = str.split(" ");
// 	for (var st in str) {
// 		// str[st] = str[st].charAt(0).toUpperCase() + str[st].substr(1).toLowerCase();
// 		str[st] = str[st].replaceMe();
// 	}
// 	return str.join(" ");
// }

// function titleCaseF(str) {
// 	var convertToArray = str.toLowerCase().split(' ');
// 	var result = convertToArray.map(function (val) {
// 		return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
// 	});
// 	return result.join(' ');
// }

function titleCaseF(str) {
	return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titleCaseF('the TeSDFINg phrase.'));
