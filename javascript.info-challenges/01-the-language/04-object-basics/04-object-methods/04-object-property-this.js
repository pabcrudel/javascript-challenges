// Using "this" in object literal
// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser () {
  return {
    name: 'John',
    ref: this
  };
}

const user = makeUser();

console.log(user.ref); // What's the result?

/** WRONG
 * console.log(user.ref.name); => 'John'
 *
 * "this" will binds to the actual object at run-time. So it will be "user"
 * because it is doing a circular reference.
 */

// solution
// Answer: an error.

// Try it:

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
// That's because rules that set this do not look at object definition. Only the
// moment of call matters.

// Here the value of this inside makeUser() is undefined, because it is called
// as a function, not as a method with "dot" syntax.

// The value of this is one for the whole function, code blocks and object
// literals do not affect it.

// So ref: this actually takes current this of the function.

// We can rewrite the function and return the same this with undefined value:

// function makeUser(){
//   return this; // this time there's no object literal
// }

// alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
// As you can see the result of alert( makeUser().name ) is the same as the
// result of alert( user.ref.name ) from the previous example.

// Here's the opposite case:

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();

// alert( user.ref().name ); // John
// Now it works, because user.ref() is a method. And the value of this is set to
// the object before dot ..
