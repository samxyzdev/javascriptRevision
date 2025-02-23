// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]); // => 2

// Array Methods

myArr.push(6);
myArr.push(7);
console.log(myArr); // => [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop(); // remove the last element
console.log(myArr); // => [0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9); // add the element at begining CAREFULL shift the whole array

myArr.shift(9); // remove the value from beginning

console.log(myArr.includes(9)); // => false
console.log(myArr.indexOf(9)); // => -1   because 9 doesn't exist

const newArr = myArr.join(); // convert the array into string
console.log(myArr); // => [0, 1, 2, 3, 4, 5, 6]
console.log(newArr); // => 0,1,2,3,4,5,6
console.log(typeof newArr); // => string

// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1); // => [ 1, 2 ]
console.log("B ", myArr); // => B  [0, 1, 2, 3, 4, 5, 6]
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); // => C  [ 0, 4, 5, 6 ]
console.log(myn2); // => [ 1, 2, 3 ]
