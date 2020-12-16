// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
	//* primes arr
	// let primes = [];
	// function isPrime(val) {
	// 	if (val < 2) return false;
	// 	for (let i = 2; i < val; i++) {
	// 		if (val % i === 0) return false;
	// 	}
	// 	return true;
	// }
	// for (let i = 0; i <= num; i++) {
	// 	isPrime(i) ? primes.push(i) : '';
	// }
	// return primes.reduce((acc, curr) => acc + curr);

	let primes = 0;
	function isPrime(val) {
		if (val < 2) return false;
		for (let i = 2; i < val; i++) {
			if (val % i === 0) return false;
		}
		return true;
	}
	for (let i = 0; i <= num; i++) {
		isPrime(i) ? primes += i : '';
	}
	return primes;
}
console.log(sumPrimes(30));// 17
console.log(sumPrimes(10));// 17
console.log(sumPrimes(977));// 73156

/// fcc's hints + stack
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-primes/16085
// https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100

function sumPrimesF(num) {
	//* arr + loop filter
	// let nums = Array.from({ length: num + 1 }).map((_, i) => i).slice(2);
	// /*
	//  - from creates an array of undefined elements and a length of num+1
	//  - map ignores the current element and returns the indexes
	//  - slice removes 0 and 1;
	// */
	// for (let n in nums) {
	// 	nums = nums.filter(val => {
	// 		return val === nums[n] || val % nums[n] !== 0;
	// 		// already checked || remainder of dividing val between each array element !== 0
	// 	});
	// }
	// console.log(nums);
	// return nums.reduce((acc, curr) => acc + curr);

	//* Math
	let isPrime = function (num) {
		let m = Math.sqrt(num);
		m = Math.floor(m);
		console.log(m);

		while (m > 1) {
			console.log(num, m);
			if ((num % m === 0)) return false;
			m--;
		}
		return true;
	};
	let arr = Array.from({ length: num + 1 }).map((_, i) => i).slice(2);
	console.log(arr);
	return arr.filter(value => isPrime(value)).reduce((acc, curr) => acc + curr);

}

console.log(sumPrimesF(10));// 17
// console.log(sumPrimesF(30));// 17
// console.log(sumPrimesF(977));// 73156

