"use strict";

const { insertInArrayInPlace } = require('./main.js');

/** Unit Testings
 * - [0] Raw Array
 * - [1] indexThatIsBefore
 * - [2] arrayOrPrimitiveToInsert
 * - [3] Expected Inserted Array
 */
const utArray = [
  [
    [ 8, 9 ],
    0,
    "Hi",
    [ 8, "Hi", 9 ],
  ],
  [
    ["First", "Second", "Third"],
    1,
    null,
    ["First", "Second", null, "Third"],
  ],
  [
    ["First", "Second", "Third"],
    0,
    ["One who was closer", "Another one closer"],
    ["First", "One who was closer", "Another one closer", "Second", "Third"],
  ],
];

const length = utArray.length;
for (let i = 0; i < length; i++) {
  console.log(`\nTest number: ${i + 1}`);

  const test = utArray[i][0];
  console.log("Original array: ", test);

  const indexThatIsBefore = utArray[i][1];
  console.log("indexThatIsBefore: ", indexThatIsBefore);

  const arrayOrPrimitiveToInsert = utArray[i][2];
  console.log("arrayOrPrimitiveToInsert: ", arrayOrPrimitiveToInsert);

  insertInArrayInPlace(test, indexThatIsBefore, arrayOrPrimitiveToInsert);
  console.log("Inserted array: ", test);

  console.log("Expected array: ", utArray[i][3]);
};
console.log();