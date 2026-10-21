
let count = 0;

function increment() {
    count++;
    console.log(`Count: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count: ${count}`);
}

function counterSimulation() {
    let message = "Counter Simulation Started";

    function displayMessage() {
        console.log(message);
        console.log(`Current Count: ${count}`);
    }

    displayMessage();
    increment();
    increment();
    decrement();
    displayMessage();
}

counterSimulation();
