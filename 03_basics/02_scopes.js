// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // => 10
// console.log(b); // => 20
// console.log(c); // => 30

// var c = 300;
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// console.log(a); // => a is not defined
// console.log(b); // => b is not defined
// console.log(c); // => 30   NOW This is a problem.

// let c = 300;
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// console.log(c); // => 300

function one() {
  const username = "Sameer";
  function two() {
    const website = "Youtube";
    // console.log(username);
  }
  // console.log(website); // => ReferenceError: website is not defined    Also next line will not execute.
  two();
}
one();

if (true) {
  const username = "Sameer";
  if (username === "Sameer") {
    const website = " youtube";
    // console.log(username + website); // => Sameer youtube
  }
  // first error // console.log(website); // => ReferenceError: website is not defined
}

// second error // console.log(username); // => ReferenceError: username is not defined

// +++++++++++++++++++++++  interesting ++++++++++++++++++++++++++++

addone(5);
function addone(num) {
  return num + 1;
}
// This can be access before declaration

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
// but this can not.
