"use strict";

/*
insertInArray(arrayIn, indexThatIsBefore, arrayOrPrimitiveToInsert)

Returns the modified array that inserts the last parameter into the first
array, at the index after the second parameter. When inserting an array,
it inserts it flat (its elements side by side with the elements of the
other array).
Assume that the arrays are of primitives.
*/

function insertInArray(arrayIn, indexThatIsBefore, arrayOrPrimitiveToInsert) {
  let insertedArray = [];
  const position = indexThatIsBefore + 1;
  let moveOriginalArrayIndex = 0;

  for (let i = 0; i < arrayIn.length; i++) {
    // Insert items of arrayIn before position
    if (i <= indexThatIsBefore) insertedArray[i] = arrayIn[i];

    // Insert item
    if (i === position) {
      // Case 1: Is a primitive value
      if (
        typeof arrayOrPrimitiveToInsert !== 'object' ||
        arrayOrPrimitiveToInsert === null
      ) {
        insertedArray[i] = arrayOrPrimitiveToInsert;
        moveOriginalArrayIndex++;
      }
      // Case 2: Is an Array
      else {
      const length = arrayOrPrimitiveToInsert.length;
      moveOriginalArrayIndex += length;

        for (let j = 0; j < length; j++)
          insertedArray[i + j] = arrayOrPrimitiveToInsert[j];
      };
    };

    // Insert rest of arrayIn
    if (i >= position) insertedArray[i + moveOriginalArrayIndex] = arrayIn[i];
  };
  return insertedArray;
};

module.exports = {
  insertInArray
};
