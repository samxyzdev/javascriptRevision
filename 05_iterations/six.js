const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);
// => js
//    ruby
//    java
//    puthon
//    cpp
//    undefined
// .forEach don't return anything

// if we want to return We have other methods for that

// Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4); // implicit return
console.log(newNums); // => [5,6,7,8,9,10]

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums1 = myNums.filter((num) => {
  // in Scope you have to type the return
  return num > 4;
}); // implicit return
console.log(newNums1); // => [5,6,7,8,9,10]

// filtering using forEach
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums2 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
}); // implicit return
console.log(newNums); // => [5,6,7,8,9,10]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.genre === "History");
console.log(userBooks);
// => [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

const userBooks1 = books.filter((bk) => bk.publish >= 2000);
console.log(userBooks1);
// => [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]

const userBooks2 = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === "Science";
});
console.log(userBooks2);
// => [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]
