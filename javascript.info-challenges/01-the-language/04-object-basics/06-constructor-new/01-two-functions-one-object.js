// Two functions – one object
// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// If it is, then provide an example of their code.

// I created a new object that each Constructor Function will return overriding
// it's own "this", so a and b will point to the same memory address.
const c = {};

function A () { return c; }
function B () { return c; }

const a = new A();
const b = new B();

console.log(a === b);
