
const feedback =
    "Great product! Fast delivery and amazing sound quality!";

const words = feedback.trim().split(/\s+/);
const lowerCaseFeedback = feedback.toLowerCase();

const containsNegativeWords =
    lowerCaseFeedback.includes("bad") ||
    lowerCaseFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${words.length}`);

if (!containsNegativeWords) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
