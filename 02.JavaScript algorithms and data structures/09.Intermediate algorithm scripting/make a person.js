//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

let Person = function (firstAndLast) {
	let fullName = firstAndLast.split(' ');
	let firstName = fullName[0], lastName = fullName[1];
	let validate = value => {
		return (typeof value === 'string' && [...arguments].length === 1);
	};
	this.setFirstName = function (first) {
		if (validate(first)) firstName = first;
	};
	this.setLastName = function (last) {
		if (validate(last)) lastName = last;
	};
	this.setFullName = function (firstAndLast) {
		if (validate(firstAndLast)) {
			firstName = firstAndLast.split(' ')[0];
			lastName = firstAndLast.split(' ')[1];
			fullName = firstAndLast;
		}
	};
	this.getFullName = function () {
		fullName = firstName + " " + lastName;
		return fullName;
	};
	this.getFirstName = function () {
		return firstName;
	};
	this.getLastName = function () {
		return lastName;
	};

};

let bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);// 6
console.log(bob instanceof Person);// true
console.log(bob.firstName); // undefined
console.log(bob.lastName); // undefined
console.log(bob.getFirstName()); // 'Bob'
console.log(bob.getLastName()); // 'Ross'
console.log(bob.getFullName()); // 'Ross'

bob.setFirstName('Haskell');
console.log(bob.getFirstName());// 'Haskell'
console.log(bob.getFullName());// 'Haskell Ross'
bob.setLastName('Curry');
console.log(bob.getFullName());// 'Haskell Curry'

bob.setFullName("Min Test");
console.log(bob.getFirstName());// 'Min'
console.log(bob.getLastName());// 'Test'
console.log(bob.getFullName());// 'Min Test'

/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-make-a-person/16020

let PersonF = function (firstAndLast) {
	let fullName = firstAndLast;

	this.getFirstName = function () {
		return fullName.split(' ')[0];
	};
	this.getLastName = function () {
		return fullName.split(' ')[1];
	};
	this.getFullName = function () {
		return fullName;
	};
	this.setFirstName = function (first) {
		fullName = first + ' ' + fullName.split(' ')[1];
	};
	this.setLastName = function (last) {
		fullName = fullName.split(' ')[0] + ' ' + last;
	};
	this.setFullName = function (full) {
		fullName = full;
	};
};
