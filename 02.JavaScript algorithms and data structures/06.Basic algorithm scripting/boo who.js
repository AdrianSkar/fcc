// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

function booWho(bool) {
	// console.log(new Boolean(bool));
	console.log(typeof (bool));
	// return (bool === true || bool === false) ? true : false;
	// return (typeof (bool) === 'boolean');

	//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-boo-who/16000/5

	// return (Boolean(bool) === bool);

	// if (bool === false) {
	// 	return true;
	// }
	// return bool === true;

	// return bool === true || bool === false;

	return !!bool === bool;

}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho([1, 2, 3]));