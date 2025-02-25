// Immediately Invoked Function Expressions (IIFE)

function chai() {
  console.log(`DB CONNECTED`);
}() // This is giving error 


(function chai() { // Named IIFF
    console.log(`DB CONNECTED`);
})(); // => DB CONNECTED


(function aurcode () {
    console.log(`DB CONNECTED TWO`);
})(); // => DB CONNECTED TWO    pay extra attention to SEMICOLON


((name) => { // UNKNOWN IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Sameer"); // => DB CONNECTED TWO Sameer


// If you write two IIFE don't forget SEMICOLON.