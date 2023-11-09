/**
cleanArrayInPlace(arrayIn);

Removes the entries of the input array that have value null or undefined
or "empty" entries.
Does not assume array of primitives, but does not work recursively.
*/
export default function cleanArrayInPlace(arrayIn) {
  /** Infinite loop locker because of recursive function. */
  let hasPassed = false;
  for (let i = 0; i < arrayIn.length;) {
    const item = arrayIn[i];

    if (item === null || !item || item.length === 0) {
      const length = arrayIn.length;

      // Move each item 1 position left and delete last array item.
      for (let j = i; j < length; j++) arrayIn[j] = arrayIn[j + 1];
      arrayIn.length = length - 1;
      
      hasPassed = false; // Restore locker.
    }
    // Recursive function call to clean arrays
    else if (!hasPassed && Array.isArray(item)) {
      cleanArrayInPlace(item);
      hasPassed = true; // Lock recursive call.
    }
    else {
      i++; // Index only is increase if is a valid value.

      hasPassed = false; // Restore locker.
    };
  }
};
