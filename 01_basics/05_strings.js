const name = "sameer";
const repoCount = 50;

// console.log(name + repoCount + " Value");  It's Outdated.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sameer-sm");

console.log(gameName[0]); // => h
console.log(gameName.__proto__); // => {} But on Browser its not empty Also you don't have write __proto__.something you can directly access the method.

console.log(gameName.length); // => 6
console.log(gameName.toUpperCase()); // => SAMEER
console.log(gameName.charAt("2")); // => m
console.log(gameName.indexOf("t")); // => -1 because its not exist
console.log(gameName.indexOf("S")); // => 0 because its exist on 0th index.

const newString = gameName.substring(0, 4); // not take negative value
console.log(newString); // => Same

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // => ame

const newStringOne = "    Sameer    ";
console.log(newString); // =>     Sameer
console.log(newString.trim()); // => Sameer

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));

console.log(url.includes("Sameer"));

const gameName2 = "Sameer-Ahmed-Developer";
console.log(gameName2.split("-")); // => ["Sameer","Ahmed","Dveloper"]
