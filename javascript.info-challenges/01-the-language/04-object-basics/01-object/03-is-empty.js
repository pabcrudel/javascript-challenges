/** Check for emptiness
 * Write the function isEmpty(obj) which returns true if the object has no
 * properties, false otherwise.
 */

const schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule)); // false

function isEmpty (obj) {
  // eslint-disable-next-line no-unreachable-loop
  for (const key in obj) {
    // If this line is reachable, then it isn't empty.
    return false;
  }
  return true;
}
