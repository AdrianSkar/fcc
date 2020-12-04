// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
	let arr = [];
	// Change below

	// let sourceProps = Object.keys(source);
	// for (const obj of collection) {
	// 	let results = [];
	// 	for (let sourceKey of sourceProps) {
	// 		results.push(obj[sourceKey] === source[sourceKey]); // or: Object.is(obj[sourceKey], source[sourceKey])
	// 	}
	// 	if (results.every(Boolean)) arr.push(obj);
	// }

	collection.forEach(value => {
		let match = [];
		Object.keys(source).forEach(key => {
			match.push(Object.is(value[key], source[key]));
		});
		if (match.every(Boolean)) arr.push(value);
	});

	//Change above
	return arr;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));// {first: "Tybalt", last: "Capulet"}
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); // 0 and 2

// fcc's hints
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-wherefore-art-thou/16092

function whatIsInANameF(collection, source) {
	let srcKeys = Object.keys(source);

	// return collection.filter(obj => {
	// 	for (let i = 0; i < srcKeys.length; i++) {
	// 		if (
	// 			// !obj.hasOwnProperty(srcKeys[i]) || // not needed really
	// 			obj[srcKeys[i]] !== source[srcKeys[i]]
	// 		) return false;
	// 	}
	// 	//* simpler:
	// 	// for (let value of srcKeys) {
	// 	// 	if (obj[value] !== source[value]) return false;
	// 	// }
	// 	return true;
	// });

	return collection.filter(obj => {
		return srcKeys.every(key => {
			return obj[key] === source[key];
		});
	});


}

console.log(whatIsInANameF([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));// {first: "Tybalt", last: "Capulet"}
console.log(whatIsInANameF([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); // 0 and 2
