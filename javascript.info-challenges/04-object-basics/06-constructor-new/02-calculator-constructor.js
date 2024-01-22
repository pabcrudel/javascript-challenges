// Create new Calculator
// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator () {
  this.read = function (a, b) { this.a = a; this.b = b; };
  this.sum = function () { return this.a + this.b; };
  this.mul = function () { return this.a * this.b; };
}

const calculator = new Calculator();
calculator.read(4, 2);

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());
