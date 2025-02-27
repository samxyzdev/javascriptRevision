const array1 = [2, 2, 3, 4];
const initialValue = 0; // this also accumulator value, if its not udefined accumulator value is 0.
// current value is 0th index value of an array. and keep increasing from tham
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial); // => 10
// 0 + 2 => 2
// 2 + 2 => 4
// 4 + 3 => 7
// 7 + 4 => 11

const myNums = [1, 2, 3];
const myTotal = myNums.reduce(function (acc, currval) {
  return acc + currval;
}, 0);
console.log(myTotal); // => 6

const myNums2 = [1, 2, 3];
const myTotal2 = myNums2.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);
console.log(myTotal2);
// => acc: 0 and currval: 1
//    acc: 1 and currval: 2
//    acc: 3 and currval: 3
//    6

const myTotal3 = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal3); // => 6

const shoppingCart = [
  { itemName: "Javascript", price: 999 },
  { itemName: "python", price: 999 },
  { itemName: "mobile dev course", price: 5999 },
  { itemName: "data science", price: 12999 },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // => 20996
