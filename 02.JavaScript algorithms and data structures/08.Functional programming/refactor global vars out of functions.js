// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
	// let output = Array.from(arr); // [...arr] or new Array(...arr)
	// output.push(bookName);
	// console.log(bookList);
	// return output;

	return arr.concat(bookName);

	//* fcc's hint:
	// return [...arr, bookName];

	// Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
	// let index = arr.indexOf(bookName);
	// return [...arr.slice(0, index), ...arr.slice(index + 1)]; // or: return new Array(...arr.slice(0, index), ...arr.slice(index + 1));

	return arr.filter(value => value !== bookName);
	// Change code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
