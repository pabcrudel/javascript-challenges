// Chaining
// There's a ladder object that allows to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };
// Now, if we need to make several calls in sequence, can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such approach is widely used across JavaScript libraries.

// My solution: return the object after modifying it to the next chained method
const ladder = {
  step: 0,
  up () {
    this.step++;

    return this;
  },
  down () {
    this.step--;

    return this;
  },
  showStep: function () {
    console.log(this.step);

    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();
