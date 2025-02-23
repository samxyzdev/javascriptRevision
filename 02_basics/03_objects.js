// singleton
Object.create; // and inside this we create SINGLETON pattern object.

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Sameer",
  fullName: "Sameer Ahmed",
  [mySym]: "mykey1",
  age: 18,
  location: "Bikaner",
  email: "sameer@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Dot method
console.log(JsUser.email); // => sameer@google.com
// Square Notation
console.log(JsUser["email"]); // => sameer@google.com
console.log(JsUser["fullName"]); // => Sameer Ahmed    Above fullName key is in "" because of prettier it remove the "" quote and If you have Keys in "" that's the only way

console.log(JsUser.mySym); // => mykey1   but still not using as Symbol
console.log(typeof JsUser.mySym); // => string

// To use it as SYMBOL wrap the key in [] and also when console loging wrap it []
console.log(JsUser[mySym]); // => mykey1
console.log(typeof JsUser[mySym]); // => string  because the value is string
console.log(JsUser); // => {
//     name: 'Sameer',
//     fullName: 'Sameer Ahmed',
//     age: 18,
//     location: 'Bikaner',
//     email: 'sameer@google.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }  ^-> This consider as SYMBOL

// CHANGING VALUE IN OBJECT

JsUser.email = "sameer@chatgpt.com";
// Object.freeze(JsUser);  i comment this so that i can perform other tas on object
JsUser.email = "sameer@microsoft.com"; // This value won't propogate
console.log(JsUser.email); // sameer@chatgpt.com

JsUser.greeting = function () {
  console.log("Hello JS user");
};

console.log(JsUser.greeting); // => [Function (anonymous)]  function reference
console.log(JsUser.greeting()); // => Hello JS user
//                                    undefined   // becuase one executino happen on it own.

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // => Hello JS user
  //                                                 undefined
};

console.log(JsUser.greeting()); // => Hello JS user
//                                    undefined
console.log(JsUser.greetingTwo()); // => Hello JS user, Sameer
//                                       undefined
