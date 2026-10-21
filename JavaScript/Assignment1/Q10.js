
const age = 19;
const isCitizen = true;

let eligibility;

if (isCitizen && age >= 18) {
    if (age >= 21) {
        eligibility = "Eligible for all services.";
    } else {
        eligibility = "Eligible to vote only.";
    }
} else if (!isCitizen && age >= 18) {
    eligibility = "Only age criteria met.";
} else {
    eligibility = "Not eligible yet.";
}

console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen}`);
console.log(`Eligibility: ${eligibility}`);
