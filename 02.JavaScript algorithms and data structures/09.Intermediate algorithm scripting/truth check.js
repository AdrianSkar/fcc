// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

function truthCheck(collection, pre) {
	// for (let prop of collection) {
	// 	if (prop[pre] === undefined) {
	// 		return false;
	// 	}
	// }
	// return true;

	// return collection.filter(value => !value[pre]).length > 0 ? false : true;
	// return !Boolean(collection.filter(value => !value[pre])[0]);
	// return !collection.map(value => Boolean(value[pre])).includes(false);
	// return collection.every(val => val[pre]);
	return !collection.some(val => !val[pre]);

}

console.log(truthCheck([{ "user": "Tinky Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));// true
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")); // false
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age")); // false

// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-everything-be-true/16011

function truthCheckF(collection, pre) {
	let counter = 0;
	for (const c in collection) {
		if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) counter++;
	}
	return counter === collection.length;
}

console.log(truthCheckF([{ "user": "Tinky Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));// true
console.log(truthCheckF([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")); // false
console.log(truthCheckF([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age")); // false