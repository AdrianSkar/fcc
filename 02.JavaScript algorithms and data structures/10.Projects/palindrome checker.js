// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

/* 
 Check palindromes ignoring punctuation, casing and spacing,
 remove non-alpha characters and lowercase everything.
 Return t / f
*/

function palindrome(str) {
	str = str.toLowerCase().replace(/[\W_]/g, '');
	let rev = str.split('').reverse().join('');
	return str === rev;
}
console.log(palindrome('eye'));
console.log(palindrome('_eye')); //t
console.log(palindrome('eye2@#$%'));
console.log(palindrome("0_0 (: /-\ :) 0-0"));//t


/// fcc's solutions:

function palindromeF(str) {
	//* Solution 1
	// return (
	// 	str.replace(/[\W_]/g, "").toLowerCase() ===
	// 	str
	// 		.replace(/[\W_]/g, "")
	// 		.toLowerCase()
	// 		.split("")
	// 		.reverse()
	// 		.join('')
	// );

	//* Solution 2
	// str = str.toLowerCase().replace(/[\W_]/g,'');
	// for (let i = 0, len = str.length-1; i < len/2;i++){
	// 	if(str[i] !== str[len - i]){
	// 		return false;
	// 	}
	// }
	// return true;

	//* Solution 3 (best performance)
	// front and back pointers
	let front = 0, back = str.length - 1;
	// they won't always meet in the middle so use back > front
	while (back > front) {
		// Inc/decre. pointers if curr char doesn't meet criteria
		if (str[front].match(/[\W_]/)) {
			front++;
			continue;
		}
		if (str[back].match(/[\W_]/)) {
			back--;
			continue;
		}
		// do the comparison between chars
		if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
		front++;
		back--;
	}
	return true;

}

console.log(palindromeF('eye'));
console.log(palindromeF('_eye')); //t
console.log(palindromeF('eye2@#$%'));
console.log(palindromeF("0_0 (: /-\ :) 0-0"));//t



