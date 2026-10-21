
const temperature = 25;
const isRaining = false;
const windSpeed = 10;

let activity;

if (isRaining) {
    activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    activity = "Too cold and windy — stay home.";
} else if (
    (temperature >= 15 && temperature <= 35) ||
    windSpeed <= 20
) {
    activity = "Perfect day for a walk.";
} else {
    activity = "Stay indoors and relax.";
}

console.log(`Temperature: ${temperature}°C`);
console.log(`Is it raining? ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Recommendation: ${activity}`);
