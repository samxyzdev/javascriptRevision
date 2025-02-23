const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros); // => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// Concate
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread Operatoe
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // => [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

console.log(Array.isArray("Sameer")); // => false
console.log(Array.from("Sameer")); // ["S","a","m","e","e","r"]
console.log(Array.from({ name: "Sameer" })); // => interesting
// What Happens in Your Code?
// Array.from({ name: "Sameer" })

// { name: "Sameer" } is not iterable and does not have a .length property.
// So, JavaScript throws a TypeError.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // => [ 100, 200, 300 ]
