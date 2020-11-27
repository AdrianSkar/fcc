// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
	// Only change code below this line

	var newArray = [];
	// this.forEach(value => (callback(value) ? newArray.push(value) : undefined));
	for (let value of this) if (callback(value)) newArray.push(value);

	// Only change code above this line
	return newArray;
};

var new_s = s.myFilter(function (item) {
	return item % 2 === 1;
});

console.log(new_s);