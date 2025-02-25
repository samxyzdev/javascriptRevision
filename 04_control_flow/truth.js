const userEmail = "h@hitesh.ai";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", "false", " ", [], {}, function(){}
// --------- truthy values have wall "",{},[]   ------------

// checking empty Array
if (userEmail.length === 0) {
  console.log("Array is empty");
}

// checking empty Object
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Remeber for Interview Perspective
// false == 0 // => true
// false == "" // => true
// 0 == "" // => true

// Nullish Coalescing Operator (??) saari kahani null or undefined ki hai
let val1;
val1 = 5 ?? 10;
console.log(val1); // => 5

let val2;
val2 = null ?? 10;
console.log(val2); // => 10

let val3;
val3 = null ?? null ?? 20;
console.log(val3); // => 20

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // => more than 80
