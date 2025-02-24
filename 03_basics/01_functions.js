function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("M");
  console.log("E");
  console.log("E");
  console.log("R");
}

sayMyName();
// => S
//    A
//    M
//    E
//    E
//    R

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(); // => NaN
addTwoNumbers(3, 4); // => 7
addTwoNumbers(3, "4"); // => 34
addTwoNumbers(3, null); // => 3

const result = addTwoNumbers(3, 5); // => 8

console.log("Result: ", result); // => Result: undefined

function addTwoNumbers1(number1, number2) {
  let result = number1 + number2;
  console.log("Sameer");
  return result;
  console.log("Sameer");
}

const result1 = addTwoNumbers(3, 5); // => 8

console.log("Result: ", result); // => Result: 8

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage);
console.log(loginUserMessage("Sameers")); // => Sameers just logged in
