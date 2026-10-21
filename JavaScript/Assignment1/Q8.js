
const currentSalary = 30000;
const annualIncrementRate = 10;

let projectedSalary = currentSalary;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary += projectedSalary * annualIncrementRate / 100;
    projectedSalary = Math.round(projectedSalary);

    salaryReport.push({
        Year: year,
        Salary: `₹${projectedSalary.toLocaleString("en-IN")}`
    });
}

console.log("Five-Year Salary Projection");
console.table(salaryReport);

