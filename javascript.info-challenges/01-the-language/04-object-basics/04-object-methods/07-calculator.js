// Create a calculator

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names
// a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

const calculator = {
  read (a, b) { this.a = a; this.b = b; },
  sum () { return this.a + this.b; },
  mul () { return this.a * this.b; }
};

// Set the values as params because I'm testing this on the terminal using node
calculator.read(5, 3);
console.log(calculator.sum());
console.log(calculator.mul());
