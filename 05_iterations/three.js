// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log(element);
}

const greetings = "Hello world";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}
// No need for condition and increment

// Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // This will not include
console.log(map);
// => Map(3) {
//      'IN' => 'India',
//      'USA' => 'United States of America',
//      'FR' => 'France'
//    }

for (const key of map) {
  console.log(key);
}
// => [ 'IN', 'India' ]
//    [ 'USA', 'United States of America' ]
//    [ 'FR', 'France' ]
// But we only want Key.Use Square bracket []
for (const [key, value] of map) {
  console.log(key, ":-", value);
}
// => IN :- India
//    USA :- United States of America
//    FR :- France

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
// => myObject is not iterable
// "for of" only iterate over Maps
