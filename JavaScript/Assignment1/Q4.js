
const marks = [90, 85, 88, 92, 80];

const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

const hasFailedSubject = marks.some(mark => mark < 35);

let result;

if (hasFailedSubject || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else {
    result = "Promoted";
}

console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
