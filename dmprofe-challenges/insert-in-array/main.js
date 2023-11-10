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

  for (let i = 0, j = 0; i < arrayIn.length; i++, j++) {
    insertedArray[j] = arrayIn[i];

    // Insert item
    if (i === indexThatIsBefore) {
      // Case 1: Is a primitive value
      if (
        typeof arrayOrPrimitiveToInsert !== 'object' ||
        arrayOrPrimitiveToInsert === null
      ) {
        insertedArray[++j] = arrayOrPrimitiveToInsert;
      }
      // Case 2: Is an Array
      else {
        for (let k = 0; k < arrayOrPrimitiveToInsert.length; k++)
          insertedArray[++j] = arrayOrPrimitiveToInsert[k];
      };
    };
  };
  return insertedArray;
};

/*
insertInArrayInPlace(arrayIn, indexThatIsBefore, arrayOrPrimitiveToInsert)

Same as `insert-in-array.js`, but modifies the input array in place,
and does not return anything.
*/

function insertInArrayInPlace(
  arrayInOut, indexThatIsBefore, arrayOrPrimitiveToInsert
) {
  let insertedArray = [];
  const position = indexThatIsBefore + 1;

  for (let i = position, j = 0; i < arrayInOut.length; i++) {
    // Insert item
    if (i === position) {
      // Case 1: Is a primitive value
      if (
        typeof arrayOrPrimitiveToInsert !== 'object' ||
        arrayOrPrimitiveToInsert === null
      ) {
        insertedArray[i] = arrayOrPrimitiveToInsert;
        j++;
      }
      // Case 2: Is an Array
      else {
        for (; j < arrayOrPrimitiveToInsert.length; j++)
          insertedArray[i + j] = arrayOrPrimitiveToInsert[j];
      };
    };

    // Insert rest of arrayIn
    if (i >= position)
      insertedArray[i + j] = arrayInOut[i];
  };

  for (let i = position; i < insertedArray.length; i++) {
    arrayInOut[i] = insertedArray[i];
  };
};

module.exports = { insertInArray, insertInArrayInPlace };
