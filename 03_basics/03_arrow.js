const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to webstie`);
    console.log(this); // => {
    //                         username: 'hitesh',
    //                         price: 999,
    //                         welcomeMessage: [Function: welcomeMessage]
    //                       }
  },
};

user.welcomeMessage(); // => hitesh welcome to webstie
user.username = "sam"; // Here we change the context.
user.welcomeMessage(); // => sam welcome to webstie

console.log(this); // => {}

function chai() {
  let username = "Smaeer";
  console.log(this.username); // => undefined
  console.log(this); // =>
  // <ref *1> Object [global] {
  //   global: [Circular *1],
  //   clearImmediate: [Function: clearImmediate],
  //   setImmediate: [Function: setImmediate] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   clearInterval: [Function: clearInterval],
  //   clearTimeout: [Function: clearTimeout],
  //   setInterval: [Function: setInterval],
  //   setTimeout: [Function: setTimeout] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   queueMicrotask: [Function: queueMicrotask],
  //   structuredClone: [Getter/Setter],
  //   atob: [Getter/Setter],
  //   btoa: [Getter/Setter],
  //   performance: [Getter/Setter],
  //   fetch: [Function: fetch],
  //   navigator: [Getter],
  //   crypto: [Getter]
}
chai();

const chai1 = function () {
  let username = "Sameer";
  console.log(this.username); // => undefined
};
chai1();

const chai2 = function () {
  let username = "sameer";
  console.log(this.username); // => undefined
};
chai2();

const chai3 = () => {
  let username = "hitesh";
  console.log(this.username); // => undefined
};
chai3();

const addtwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addtwo(4, 4)); // => 8
const addtwo2 = (num1, num2) => num1 + num2;

const addtwo4 = (num1, num2) => ({ username: "Sameer" });

const addtwo3 = (num1, num2) => num1 + num2;

console.log(addtwo(3, 4));
