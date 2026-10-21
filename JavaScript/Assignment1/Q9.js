
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;

const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let correctAnswer;

switch (operator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;

    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;

    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;

    case "/":
        correctAnswer = Number((firstNumber / secondNumber).toFixed(2));
        break;

    default:
        console.log("Invalid operator");
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);
