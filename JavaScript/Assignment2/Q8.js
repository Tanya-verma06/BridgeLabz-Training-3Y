
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce(
    (total, product) => total + product.price,
    0
);

let discountedTotal = 0;

for (const product of cart) {
    let discountPercentage = 0;

    if (product.category === "electronics") {
        discountPercentage = 10;
    } else if (product.category === "fashion") {
        discountPercentage = 5;
    }

    const discountAmount = product.price * discountPercentage / 100;
    const finalPrice = product.price - discountAmount;

    discountedTotal += finalPrice;

    console.log(
        `${product.item}: ₹${product.price} - ${discountPercentage}% = ₹${finalPrice.toFixed(2)}`
    );
}

let finalTotal = discountedTotal;

if (originalTotal > 50000) {
    finalTotal *= 0.95;
}

console.log(`Original Cart Total: ₹${originalTotal.toFixed(2)}`);
console.log(`Total After Category Discounts: ₹${discountedTotal.toFixed(2)}`);
console.log(`Final Cart Total: ₹${finalTotal.toFixed(2)}`);
