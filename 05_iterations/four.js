// for-in On Object
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in object) {
  console.log(key); // => js cpp rb swift
}

for (const key in object) {
  console.log(myObject[key]); // => javascript C++ ruby swift by apple
}

for (const key in object) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

// // for-in On Array
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  console.log(key); // => 0 1 2 3 4
  // But in for-of loop we directly getting the value here we get the key.
}

const programming1 = ["js", "rb", "py", "java", "cpp"];
for (const key in programming1) {
  console.log(programming1[key]); // => js rb py java cpp
}

// for-in On Map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // This will not include

for (const key in map) {
  console.log(key); // => Nothing print No Error    Because Map not interatetable
}
