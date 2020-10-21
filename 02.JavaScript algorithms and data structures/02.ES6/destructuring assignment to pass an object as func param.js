/*
Destructuring assignment to pass an object as a function's parameter

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters

*/

const profileUpdate = (profileData) => {
	const { name, age, nationality, location } = profileData;
};

const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;

