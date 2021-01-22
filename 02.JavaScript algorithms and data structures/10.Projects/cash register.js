// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
function checkCashRegister(price, cash, cid) {
	const values = [
		['ONE HUNDRED', 100],
		['TWENTY', 20],
		['TEN', 10],
		['FIVE', 5],
		['ONE', 1],
		['QUARTER', 0.25],
		['DIME', 0.1],
		['NICKEL', 0.05],
		['PENNY', 0.01]
	];
	// Required from greater to lower value
	cid = cid.reverse();

	let change = cash - price, output = { status: '', change: [] };

	// calculate totalCid
	let totalCid = cid.reduce((acc, curr) => acc += curr[1], 0).toFixed(2);

	// Check if we have sufficient funds
	if (totalCid < change) {
		output = { status: "INSUFFICIENT_FUNDS", change: [] };
		return output;
	}

	// Function to update output's change values
	let changer = (val) => {
		// Custom .includes() method for output.change
		let include = output.change.findIndex(item => item[0] === val[0]);
		if (include !== -1) {
			output.change[include][1] += val[1];
		}
		else {
			//* Use Array.from() to avoid val being passed by reference and actually
			//* alter `values`.
			output.change.push(Array.from(val));
		}
	};
	//____________________________________________________________________________

	// 
	while (change > 0) {
		// Find the greatest bill we have that has a value less than change
		let highBillIdx = cid.findIndex((val, idx) => {
			console.log(val, val[1] > 0 && values[idx][1] <= change);
			return val[1] > 0 && values[idx][1] <= change;
		});

		// Call the output updater if we have proper bills, meaning change is still
		// greater than 0 but highBillIdx couldn't find one thats less than that.
		if (!cid[highBillIdx]) {
			output = { status: "INSUFFICIENT_FUNDS", change: [] };
			return output;
		}
		changer(values[highBillIdx]);

		// Update cid and change amounts
		cid[highBillIdx][1] -= values[highBillIdx][1];
		change -= (values[highBillIdx][1]);
		// toFixed(2) to avoid floating point issues
		change = change.toFixed(2);

		// update totalCid
		totalCid -= values[highBillIdx][1].toFixed(2);
	}
	//____________________________________________________________________________

	output.status = 'OPEN';

	// If we can't give exact change:
	if (parseFloat(change) !== 0) { output.status = 'INSUFFICIENT FUNDS'; }

	// If we can but run out of money:
	if (parseFloat(change) === 0 && totalCid <= 0) {
		output.status = 'CLOSED';
		cid.reverse().forEach(val => val[1] === 0 ? output.change.push(val) : 'undefined');
	}

	// fix values if floating
	output.change = output.change.map(val => {
		if (val[1] > 0) {
			val[1] = +val[1].toFixed(2);
		}
		return [val[0], val[1]];
	});
	return output;

	// todo: merge cash in drawer with actual value and use only one arr/object
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 2], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // an object.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // an object.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}.

