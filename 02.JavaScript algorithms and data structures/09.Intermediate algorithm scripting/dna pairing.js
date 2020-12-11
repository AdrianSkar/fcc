//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
	//  // switch + push
	// function mapDNA(value) {
	// 	switch (value) {
	// 		case 'A':
	// 			return ['A', 'T'];
	// 		case 'T':
	// 			return ['T', 'A'];
	// 		case 'C':
	// 			return ['C', 'G'];
	// 		case 'G':
	// 			return ['G', 'C'];
	// 	}
	// }
	// let output = [];
	// [...str].forEach(value => output.push(mapDNA(value))); // or .map()
	// // for (let item of str)output.push(mapDNA(item));
	// return output;

	/// regex?
	//? maybe with match, exec or test

	// let output = [];
	// for (let value of str) {
	// 	let proc = value
	// 		.replace(/^A/, ['AT'])
	// 		.replace(/^T/, ['TA'])
	// 		.replace(/^C/, ['CG'])
	// 		.replace(/^G/, ['GC']);
	// 	output.push([...proc]);
	// }
	// return output;

	return Array.from(str, value => {
		return [...value
			.replace(/^A/, ['AT'])
			.replace(/^T/, ['TA'])
			.replace(/^C/, ['CG'])
			.replace(/^G/, ['GC'])];
	});
}
console.time('id');
console.log(pairElement("ATCGA"));
console.timeEnd('id');


/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-dna-pairing/16009

function myReplaceF(str) {
	let pairs = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C'
	};
	let arr = str.split('');
	return arr.map(x => [x, pairs[x]]);
}

console.log(myReplaceF('ATCG'));