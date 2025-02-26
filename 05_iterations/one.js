// for

let array = ["a", "b", "c", "d", "e"];

for (let i = 0; i < array.length; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}

// console.log(element);

for (let i = 0; i < array.length; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 0; j < array.length; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
  }
}

for (let i = 0; i < array.length; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 0; j < array.length; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length); // => 3
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element); // => flash batman superman
}
// but instead of < if you have used <= you would have got
// => flash batman superman undefined

// break and continue
for (let index = 0; index < array.length; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of i is ${index}`);
}

// Shouldn't break only exit the if block?
// No, because if statements do not have their own execution scope like loops or functions. break is meant for loops (or switch cases), so when it is inside a loop, it will exit the loop completely.

for (let index = 0; index < array.length; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`); // it skip this for one time.
}
