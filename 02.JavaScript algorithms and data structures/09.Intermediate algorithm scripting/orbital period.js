// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
	const GM = 398600.4418, earthRadius = 6367.4447;

	// for (const object of arr) {
	// 	object.orbitalPeriod = Math.round((2 * Math.PI) * (Math.sqrt((Math.pow(object.avgAlt + earthRadius, 3) / GM))));
	// 	delete object.avgAlt;
	// }
	// return arr;

	let output = [];
	arr.forEach(value => {
		let oP = Math.round((2 * Math.PI) * (Math.sqrt((Math.pow(value.avgAlt + earthRadius, 3) / GM))));
		output.push({ name: value.name, orbitalPeriod: oP });
	});
	return output;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));// [{name: "sputnik", orbitalPeriod: 86400}]
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));// [{name:"iss", orbitalPeriod:5557}, {name:"hubble", orbitalPeriod:5734}, {name:"moon", orbitalPeriod:2377399}];

/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-map-the-debris/16021

function orbitalPeriodF(arr) {
	const GM = 398600.4418, earthRadius = 6367.4447;
	let newArr = JSON.parse(JSON.stringify(arr));

	//* newArr + forEach
	// newArr.forEach(function (item) {
	// 	let tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
	// 	delete item.avgAlt;
	// 	item.orbitalPeriod = tmp;
	// });
	// return newArr;

	//* map using {name, avgAlt} as param
	return arr.map(({ name, avgAlt }) => {
		const earth = earthRadius + avgAlt;
		const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
		return { name, orbitalPeriod };
	});
}
console.log(orbitalPeriodF([{ name: "sputnik", avgAlt: 35873.5553 }]));// [{name: "sputnik", orbitalPeriod: 86400}]
console.log(orbitalPeriodF([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));// [{name:"iss", orbitalPeriod:5557}, {name:"hubble", orbitalPeriod:5734}, {name:"moon", orbitalPeriod:2377399}];