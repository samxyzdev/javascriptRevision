// Primite

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // => false

const bigNumber = 12392346238979876123n;

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitve), Heap (Non-Primitive)

let myYoutubename = "SameerAhmedYoutube";
let anotherName = myYoutubename;
anotherName = "chaiaurcode";

console.log(myYoutubename); // => SameerAhmedYoutube
console.log(anotherName); // => chaiaurcode

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "sameer@google.com";

console.log(userOne.email); // => sameer@google.com
console.log(userTwo.email); // => sameer@google.com
