// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
	var newArray = [];
	// Only change code below this line

	// this.forEach(value => {
	// 	newArray.push(callback(value));
	// });

	// for (let value of this) {
	// 	newArray.push(callback(value));
	// }

	for (let i = 0, y = this.length; i < y; i++) {
		newArray.push(callback(this[i]));
	}

	// Only change code above this line
	return newArray;
};

var new_s = s.myMap(function (item) {
	return item * 2;
});


console.log(new_s);