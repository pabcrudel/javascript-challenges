'use strict';

// 1. Create an empty object 'user'
const user = {};
console.log(user);

// 2. Add the property 'name' with the value 'John'.
user.name = 'John';
console.log(user);

// 3. Add the property 'surname' with the value 'Smith'.
// eslint-disable-next-line dot-notation
user['surname'] = 'Smith';
console.log(user);

// 4.Change the value of the name to Pete.
user.name = 'Pete';
console.log(user);

// 5. Remove the property name from the object.
console.log((delete user.name, user));
