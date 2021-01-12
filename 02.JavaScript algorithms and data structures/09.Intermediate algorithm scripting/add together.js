//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether(x, y) {
	// let args = [...arguments], a = args[0];
	// if (args.some(val => typeof val !== 'number')) return undefined;
	// return (args.length > 1) ? args.reduce((acc, curr) => acc + curr)
	// 	: function (val) { return (typeof val === 'number') ? a + val : undefined; };

	// if (typeof x !== 'number') return undefined;
	// if (typeof x === 'number' && typeof y === 'number') return x + y;
	// if (!y) return val => typeof val === 'number' ? x + val : undefined;

	return (typeof x === 'number') ?
		y ?
			typeof y === 'number' ?
				x + y : undefined : val => typeof val === 'number' ?
					x + val : undefined : undefined;
}

console.log(addTogether(2, 3));// 5
console.log(addTogether(2, "3"));// undefined
console.log(addTogether('2'));// undefined
console.log(addTogether(2));// function
console.log(addTogether(2)([3]));// undefined
console.log(addTogether(5)(7));// 12
let sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));// 5


function addTogetherF() {
	let args = Array.from(arguments);
	return args.some(n => typeof n !== 'number')
		? undefined
		: args.length > 1
			? args.reduce((acc, curr) => acc + curr)
			: n => (typeof n === 'number' ? n + args[0] : undefined);
}
console.log(addTogetherF(2, 3));// 5
console.log(addTogetherF(2, "3"));// undefined
console.log(addTogetherF('2'));// undefined
console.log(addTogetherF(2));// function
console.log(addTogetherF(2)([3]));// undefined
console.log(addTogetherF(5)(7));// 12
let sumTwoAndF = addTogetherF(2);
console.log(sumTwoAndF(3));// 5

