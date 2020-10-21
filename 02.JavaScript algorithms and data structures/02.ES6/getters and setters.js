// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object

// Inside tracking in Celsius
// class Thermostat {
// 	constructor(f) {
// 		this._temperature = (5 / 9 * (f - 32));
// 	}
// 	get temperature() {
// 		return this._temperature;
// 	}
// 	set temperature(val) {
// 		this._temperature = val;
// 	}
// }

// Inside tracking in Fahrenheit
class Thermostat {
	constructor(f) {
		this._temperature = f;
	}
	get temperature() {
		return (5 / 9 * (this._temperature - 32));
	}
	set temperature(val) {
		this._temperature = (val * 9.0 / 5 + 32);
	}
}


const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature;
console.log(temp); // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(temp);
