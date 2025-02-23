const score = 400;
console.log(score); // => 400

const balance = new Number(100);
console.log(balance); // => [Number:100]

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // => 100.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // => 23.9
const otherNumber1 = 123.8966;
console.log(otherNumber1.toPrecision(3)); // => 124
const otherNumber2 = 123.8966;
console.log(otherNumber2.toPrecision(3)); // => 1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // => 10,00,000

// +++++++++++++++++++++++++  Matghs  ++++++++++++++++++++++++++++++
// By Default Library

console.log(Math);
console.log(Math.abs(-4)); // => 4
console.log(Math.round(4.6)); // => 5  Follow the rounding.
console.log(Math.ceil(4.2)); // => 5
console.log(Math.floor(4.9)); // => 4
console.log(Math.min(4, 3, 6, 8)); // => 3
console.log(Math.max(4, 3, 6, 8)); // => 8

console.log(Math.random()); //  generates a random decimal number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1)); // avoiding 0th value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// max - min + 1 = 20 - 10 + 1 = 11
// Math.random() * 11
// Math.floor(Math.random() * 11) + 10
// Possible outputs:
// 12, 17, 15, 10, 20, 19, 14, 11, etc.
