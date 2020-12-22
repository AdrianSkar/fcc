//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
	if (Math.min(arr[0], arr[1]) < 1) return 1;
	/*	
	works but has poor performance and test won't pass because of 
	possible infinite loop.
	*/
	// let max = Math.max(arr[0], arr[1]);
	// let nums = Array.from({ length: max }).map((_, i) => i + 1);
	// for (let i = 1; ; i++) {
	// 	if (nums.every(value => i % value === 0)) {
	// 		return i;
	// 	}
	// }

	//! same problem
	// let max = Math.max(arr[0], arr[1]), nums = Array.from({ length: max }).map((_, i) => i + 1);
	// let i = 2;
	// while (nums.some(value => i % value !== 0)) {
	// 	i++;
	// }
	// return i;

	//? after looking at first solution
	// Sort would have been easier
	let max = Math.max(arr[0], arr[1]), min = Math.min(arr[0], arr[1]),
		nums = Array.from({ length: max - min + 1 }).map((_, i) => i + min).reverse();
	console.log(nums);

	let output = 0, loop = 1, count;
	do {
		output = nums[0] * loop * nums[1];
		for (count = 2; count < nums.length; count++) {
			if (output % nums[count] !== 0) {
				break;
			}
		}
		loop++;
	} while (count !== nums.length);

	return output;
}
console.log(smallestCommons([1, 5])); // 60
// console.log(smallestCommons([10, 50])); // 60
// console.log(smallestCommons([10, 2])); //2520
// console.log(smallestCommons([23, 18])); // 6056820

///fcc's hints
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-smallest-common-multiple/16075
function smallestCommonsF(arr) {
	//* Solution 1
	// reverse sort because of the possibility that the scd is among the two 
	// biggest numbers
	// arr.sort((a, b) => b - a);
	// let newArr = [];
	// for (let i = arr[0]; i >= arr[1]; i--) {
	// 	newArr.push(i);
	// }
	// let quot = 0, loop = 1, n;
	// do {
	// 	quot = newArr[0] * loop * newArr[1];
	// 	for (n = 2; n < newArr.length; n++) {// starts at 2 because we're already
	// 		// using 0 and 1
	// 		if (quot % newArr[n] !== 0) {// if quot divided by each arr element from 2
	// 			// yields a reminder (doesn't meet criterion), break.
	// 			break;
	// 		}
	// 	}
	// 	loop++;
	// } while (n !== newArr.length);
	// return quot;

	//* Solution 2
	// let range = [];
	// for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
	// 	range.push(i);
	// }
	// function gcd(x, y) {// greatest common divisor
	// 	// Euclidean algorithm
	// 	if (y === 0) return x;
	// 	else return (gcd(y, x % y));
	// }

	// let lcm = range[0];
	// for (let i = 0; i < range.length; i++) {
	// 	let GCD = gcd(lcm, range[i]);
	// 	lcm = (lcm * range[i]) / GCD; // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
	// }
	// return lcm;

	//* Solution 3
	// https://en.wikipedia.org/wiki/Euclidean_algorithm
	// const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
	// const lcm = (a, b) => (a * b) / gcd(a, b);
	// // range
	// let [min, max] = arr.sort((a, b) => a - b), currentLCM = min;
	// while (min < max) {
	// 	currentLCM = lcm(currentLCM, ++min);
	// }
	// return currentLCM;

	//* Solution 4
	// let min = Math.min(...arr);
	// let max = Math.max(...arr);
	// let sol = max;

	// for (let i = max - 1; i >= min; i--) {
	// 	if (sol % i) { // increment sol by max if any arr value is not a multiple
	// 		sol += max;
	// 		i = max;
	// 	}
	// }
	// return sol;

	//* Solution 5 (calculate by breaking nums into their prime factors)
	const getPrimeFactors = (num) => {
		const primes = {};
		// 1 cannot be broken down into prime factors, start with 2
		for (let factor = 2; factor <= num; factor++) {
			while ((num % factor) === 0) {// num div by factor
				// if (primes.factor) sum 1 OR create it and add 1
				primes[factor] = (primes[factor]) ? primes[factor] + 1 : 1;
				num /= factor;
			}
		}
		return primes;
	};

	let primeFactors = {};
	for (let i = Math.max(Math.min(...arr), 2); i <= Math.max(...arr); i++) {
		let primes = getPrimeFactors(i);
		for (let j in primes) {
			if (!primeFactors[j] || primes[j] > primeFactors[j]) {
				primeFactors[j] = primes[j];
			}
		}
	}
	let result = 1;
	for (let prop in primeFactors) {
		result *= prop ** primeFactors[prop];
	}
	return result;
}

console.log(smallestCommonsF([1, 5])); // 60
// console.log(smallestCommonsF([10, 50])); // 60
// console.log(smallestCommonsF([10, 2])); //2520
// console.log(smallestCommonsF([23, 18])); // 6056820