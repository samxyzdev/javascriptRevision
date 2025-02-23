// const tinderUser = new Object();  Its's singleton Object
const tinderUser = {}; // Non Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
// => { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sameer",
      lastname: "Ahmed",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);
// => Sameer

// Optional Chaining
console.log(regularUser.fullname?.userfullname.firstname);
// => Sameer

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { obj1, obj2 };
console.log(obj3);
// => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }   // We getting object which has two object
const obj4 = Object.assign({}, obj1, obj2);
//                         ^-target, source
console.log(obj4);
// => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);
// => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },

  {
    id: 1,
    email: "s@gmail.com",
  },

  {
    id: 1,
    email: "s@gmail.com",
  },
];

users[1].email; // basic things

console.log(Object.keys(tinderUser));
// => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
// => [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));
// => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// => true
