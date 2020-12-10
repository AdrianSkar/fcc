//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {

	// if (before[0] === before[0].toUpperCase()) {
	// 	after = after[0].toUpperCase().concat(after.slice(1))
	// }
	// else {
	// 	after = after[0].toLowerCase().concat(after.slice(1));
	// }
	// return str.replace(before, after);

	// (before[0] === before[0].toUpperCase()) ?
	// 	after = after[0].toUpperCase().concat(after.slice(1)) :
	// 	after = after[0].toLowerCase().concat(after.slice(1));
	// return str.replace(before, after);

	// return Boolean(before.match(/^[A-Z]/)) ? // or /^[A-Z]/.test(before)
	return (before.match(/^[A-Z]/)) ? // or /^[A-Z]/.test(before)
		str.replace(before, after[0].toUpperCase() + after.slice(1))
		: str.replace(before, after[0].toLowerCase() + after.slice(1));
}

console.log(myReplace("A quick brown fox jumped over a lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));

///fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-search-and-replace/16045

function myReplaceF(str, before, after) {
	///Solution 1 (indexOf)
	// let index = str.indexOf(before);
	// if (str[index] === str[index].toUpperCase()) {
	// 	after = after.charAt(0).toUpperCase() + after.slice(1);
	// }
	// else {
	// 	after = after.charAt(0).toLowerCase() + after.slice(1);
	// }
	// str = str.replace(before, after);
	// return str;

	///Solution 4 (prototype) | modded
	// String.prototype.capitalize = function () {
	// 	return this[0].toUpperCase() + this.slice(1);
	// };
	// String.prototype.unCapitalize = function () {
	// 	return this[0].toLowerCase() + this.slice(1);
	// };
	// console.log(before.capitalize());
	// if (before[0] === before[0].toUpperCase()) {
	// 	return str.replace(before, after.capitalize());
	// }
	// else {
	// 	return str.replace(before, after.unCapitalize());
	// }

	///Solution 5 (destructuring, filter and map) | modded + original didn't work for the 3rd test
	let myArr = str.split(' ');
	console.log(myArr);
	let [replaceMe] = myArr.filter(word => word === before); // [] destructures the array and makes replaceMe = 'word' instead of ['word']
	console.log(replaceMe);
	return (replaceMe[0] !== replaceMe[0].toUpperCase()) ?
		myArr.map(item => (item === before) ? after.toLowerCase() : item).join(' ')
		: myArr.map(item => (item === before) ? after[0].toUpperCase() + after.slice(1) : item).join(' ');

}

console.log(myReplaceF("A quick brown fox jumped over a lazy dog", "jumped", "leaped"));
console.log(myReplaceF("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplaceF("I think we should look up there", "up", "Down"));
