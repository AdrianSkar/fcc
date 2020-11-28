// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem

const squareList = arr => {

	// return arr.filter(value => Number.isInteger(value)).filter(value => value > 0).map(value => value *= value);

	// return arr.filter(value => value > 0 && Number.isInteger(value)).map(value => value *= value);

	let out = [];
	arr.reduce((acc, curr) => {
		if (curr > 0 && Number.isInteger(curr)) out.push(Math.pow(curr, 2));
		// return acc; // this return does nothing as nothing is pushed into acc but into out. This is the same as using a for loop and doesn't take advantage of reduce capabilities. I.e.: you could do line 50.
	}, []);
	return out;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem/301311

const squareListF = arr => {
	return arr.reduce((squareIntegers, num) => {
		return Number.isInteger(num) && num > 0 ?
			squareIntegers.concat(num * num) : squareIntegers;
	});
};

const squareIntsF = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squareIntsF);

/// stack
// https://stackoverflow.com/questions/55098746/reduce-vs-filter-and-map

const squareListS = arr => {
	// return arr.reduce((out, x) => (x % 1 === 0 && x > 0) ? 
	// 	[...out, x * x] : out, []);

	// meaning:
	// return arr.reduce((out, x) => {
	// 	console.log(out);
	// 	if (x % 1 === 0 && x > 0) {
	// 		return [...out, x * x];
	// 	}
	// 	else { return out; }
	// }, []);

	//* or:
	return arr.reduce((a, val) => {
		if (val % 1 === 0 && val > 0) {
			a.push(val * val);
		}
		return a;
	}, []);
};
console.log(squareListS([-3, 4.8, 5, 3, -3.2]));