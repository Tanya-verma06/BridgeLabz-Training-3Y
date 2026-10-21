const expenses = {
    food: 4000,
    travel: 1500,
    rent: 6000,
    bills: 1000,
    leisure: 2000
};

let totalExpense = 0;

for (const category in expenses) {
    totalExpense += expenses[category];
}

const numberOfCategories = Object.keys(expenses).length;
const averageExpense = totalExpense / numberOfCategories;
const originalTotal = totalExpense;

const taxRate = 10;
const taxAmount = totalExpense * taxRate / 100;

totalExpense += taxAmount;

console.log("Monthly Expense Report");
console.log(`Total Before Tax: ₹${originalTotal.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax Amount: ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${totalExpense.toFixed(2)}`);

