// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property

let users = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	},
	Ryan: {
		age: 19,
		online: true
	}
};

function isEveryoneHere(obj) {
	// Only change code below this line
	const check = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
	let result = true;
	for (const value of check) {
		// if (!obj.hasOwnProperty(value)){
		if (!(value in obj)) { //* don't forget inner parenthesis or negation won't be correctly interpreted
			return false;
		}
	}
	return true;

	// if ('Alan' in users && 'Jeff' in users && users.hasOwnProperty('Sarah') && users.hasOwnProperty('Ryan'))
	// {return true}
	// return false;

	// Only change code above this line
}

console.log(isEveryoneHere(users));
