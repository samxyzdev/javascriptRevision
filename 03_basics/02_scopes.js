// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // => 10
// console.log(b); // => 20
// console.log(c); // => 30

var c = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // => a is not defined
// console.log(b); // => b is not defined
console.log(c); // => 30   NOW This is a problem.

let c = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(c);
