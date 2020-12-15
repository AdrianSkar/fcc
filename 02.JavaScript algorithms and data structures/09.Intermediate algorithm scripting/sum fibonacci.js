//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

/* 
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. 
*/

function sumFibs(num) {
	//* Regular loops
	// let fib = [1, 1];
	// // calculate the sequence
	// for (let i = 0; i <= num; i++) {
	// 	if (i === fib[fib.length - 1] + fib[fib.length - 2]) {
	// 		fib.push(i);
	// 	}
	// }
	// // get the odd ones
	// return fib.filter(value => value % 2 !== 0).reduce((acc, curr) => acc + curr);

	//! Recursion (can't pass the test without exceeding the call stack limit)
	let fib = [1, 1], count = 0;
	function fibMe(value) {
		// console.log(value);
		// if (value === 5) return 'cinco'
		// return fibMe(value + 1)

		// if (count === (fib[fib.length - 1] + fib[fib.length - 2])) fib.push(count);
		// count--;
		// if (count > 0) fibMe(count);

		if (count === (fib[fib.length - 1] + fib[fib.length - 2])) fib.push(count);
		count++;
		if (count < num) fibMe(count);
	}
	fibMe(num);
	return fib.filter(value => value % 2 !== 0).reduce((acc, curr) => acc + curr);

}

console.log(sumFibs(1));//10
console.log(sumFibs(10));//10
console.log(sumFibs(1000));//1785
// console.log(sumFibs(4000000));//4613732
// console.log(sumFibs(75024));//60696
// console.log(sumFibs(75025));//135721

/// fcc's hints
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-odd-fibonacci-numbers/16084

// function sumFibsF(num) {
//* prev and curr
// let prevNumber = 0, currNumber = 1, result = 0;
// while (currNumber <= num) {
// 	if (currNumber % 2 !== 0) result += currNumber;
// 	currNumber += prevNumber;
// 	prevNumber = currNumber - prevNumber;
// }
// return result;

//* fib unshift
// if (num <= 0) return 0; //check input validity
// const arrFib = [1, 1];
// let nextFib = 0;
// //use unshift to avoid calculating length
// while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
// 	arrFib.unshift(nextFib);
// }
// return arrFib.filter(x => x % 2 !== 0).reduce((a, b) => a + b);
// }

//* recursive
const sumFibsF = (n, prev = 0, curr = 1, sum = 0) => curr > n ? sum : sumFibsF(n, curr, prev + curr, sum + (curr % 2 && curr));


// console.log(sumFibsF(1));//10
// console.log(sumFibsF(10));//10
// console.log(sumFibsF(1000));//1785
// console.log(sumFibsF(4000000));//4613732
// console.log(sumFibsF(75024));//60696
// console.log(sumFibsF(75025));//135721

console.log(1 && 5);