// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs

// Only change code below this line
function urlSlug(title) {

	// return title
	// 	.split(' ')
	// 	.filter(e => e !== '')
	// 	.join('-')
	// 	.toLowerCase();

	return title
		.toLowerCase()
		.split(' ')
		.reduce((acc, curr) => (curr) ? acc.concat(curr) : acc, [])
		.join('-');

}
// Only change code above this line
console.log(urlSlug('blog post title'));
console.log(urlSlug(' Winter is  coming'));

/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-apply-functional-programming-to-convert-strings-to-url-slugs/301227

function urlSlugF(title) {

	// return title.split(/\W/)
	// 	.filter(value => value !== '')
	// 	.join('-')
	// 	.toLowerCase();

	return title
		.toLowerCase()
		.trim()
		.split(/\s+/)
		.join('-');
}

console.log(urlSlugF(' Winter is coming'));

