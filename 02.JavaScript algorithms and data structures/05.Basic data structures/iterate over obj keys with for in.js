// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement

function countOnline(usersObj) {
	// Only change code below this line
	let count = 0;
	for (let user in usersObj) {
		if (usersObj[user].online === true) { //* user.online won't work; you're trying to access property online of a string (key).
			count++;
		}
	}
	return count;
	// Only change code above this line
}

console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));
console.log(countOnline({ Jeff: { online: true } }));