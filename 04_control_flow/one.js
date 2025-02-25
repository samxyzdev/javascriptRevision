// if

if (condition) {
}

if (true) {
  // execute
}

if (false) {
  // don't execute
}

const isUserloggedIn = true;
if (isUserloggedIn) {
}

// Comparison Operatoe
// <, >, <=, >=, ==, !=, ===

if (2 != 3) {
  console.log("executed");
}

const isUserloggedIn1 = true;
const temperature = 41;
if (temperature === 41) {
  console.log("Less than 50");
} else {
  console.log("temperature is greater than 50");
}
console.log("Execute");

const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User power:${power}`);
}
console.log(`User power: ${power}`);

// Short Hand / Implicite Scope
if (balance > 500) console.log("test");

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in ");
}
