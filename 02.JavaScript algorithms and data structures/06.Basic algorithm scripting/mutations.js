// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
	// for (let letter of arr[1].toLowerCase()) {
	// 	//if (a.indexOf(iterator) < 0) return false;
	// 	if (!arr[0].toLowerCase().includes(letter)) return false;
	// }
	// return true;

	// let a = arr[0].toLowerCase().split('');
	// let b = arr[1].toLowerCase().split('');
	// return b.every(val => a.indexOf(val) >= 0);
	// return b.every(val => a.includes(val));

	let a = arr[0].toLowerCase();
	let b = arr[1].toLowerCase();
	for (const letter of b) {
		// console.log(arr[0].match(letter));
		// if (!a.match(letter)) return false;
		if (a.search(letter) < 0) return false;
	}
	return true;
}

console.log(mutation(['hello', 'hey']));// false
console.log(mutation(['hello', 'Hello']));// true
console.log(mutation(['Mary', 'Army']));// true

// fcc's hints:
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-mutations/16025/18?u=adrianskar

function mutationF(arr) {
	let re = new RegExp('[^' + arr[0] + ']', "i");
	console.log(re);
	return !re.test(arr[1]);
}

console.log(mutationF(['hello', 'hey']));// false
console.log(mutationF(['hello', 'Hello']));// true
console.log(mutationF(['Mary', 'Army']));// true
console.log(mutationF(['Alien', 'line']));// true

console.log(/[^hello]/.test('hello'));// not [hello] in 'hello'
console.log(/[^hello]/.test('hey'));// not [hello] in 'hey'