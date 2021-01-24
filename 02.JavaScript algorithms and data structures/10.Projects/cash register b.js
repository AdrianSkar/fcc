// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
function checkCashRegister(price, cash, cid) {
	//* Merging values and cid into the same object
	let values = {
		'ONE HUNDRED': { value: 100, cid: 0 },
		'TWENTY': { value: 20, cid: 0 },
		'TEN': { value: 10, cid: 0 },
		'FIVE': { value: 5, cid: 0 },
		'ONE': { value: 1, cid: 0 },
		'QUARTER': { value: 0.25, cid: 0 },
		'DIME': { value: 0.1, cid: 0 },
		'NICKEL': { value: 0.05, cid: 0 },
		'PENNY': { value: 0.01, cid: 0 }
	};
	// Required from greater to lower value
	cid = cid.reverse();

	// Include cid in values
	cid.forEach(val => values[val[0]].cid = val[1]);

	let change = cash - price, output = { status: '', change: [] };

	// calculate totalCid
	let totalCid = cid.reduce((acc, curr) => acc += curr[1], 0).toFixed(2);

	// Return if we don't have sufficient funds
	if (totalCid < change) {
		output = { status: "INSUFFICIENT_FUNDS", change: [] };
		return output;
	}

	//____________________________________________________________________________

	// Function to update output's change values
	let changer = (val, amount) => {

		// Custom .includes() method for output.change
		let include = output.change.findIndex(item => item[0] === val);
		if (include !== -1) {
			output.change[include][1] += amount;
		}
		else {
			//* Use Array.from() to avoid val being passed by reference and actually
			//* alter `values`.
			output.change.push(Array.from([val, amount]));
		}
	};

	while (change > 0) {

		for (const key in values) {
			while (values[key].cid > 0 && values[key].value <= change) {
				// update output
				changer(key, values[key].value);
				// update cid
				values[key].cid -= values[key].value;
				// update change
				change -= values[key].value;
				change = change.toFixed(2);
				// update totalCid
				totalCid -= values[key].value;
			}


		}
		// fix values if floating
		output.change = output.change.map(val => {
			console.log(val);
			if (val[1] > 0) {
				val[1] = +val[1].toFixed(2);
			}
			return [val[0], val[1]];
		});

		output.status = 'OPEN';

		// If we can't give exact change:
		if (parseFloat(change) !== 0) {
			output = { status: "INSUFFICIENT_FUNDS", change: [] };
			return output;
		}
		// If we can but run out of money:
		if (parseFloat(change) === 0 && totalCid <= 0) {
			output.status = 'CLOSED';
			cid.reverse().forEach(val => val[1] === 0 ? output.change.push(val) : 'undefined');
			return output;
		}
	}

	return output;

}

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.


// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}.

