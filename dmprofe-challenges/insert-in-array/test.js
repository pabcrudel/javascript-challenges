"use strict";

const { insertInArray } = require('./main.js');

/** Unit Testings
 * - [0] Raw Array
 * - [1] indexThatIsBefore
 * - [2] arrayOrPrimitiveToInsert
 * - [3] Expected Inserted Array
 */
const utArray = [
  [
    [ true, "hi", 4, "yes", null, 8 ],
    3,
    "bye",
    [ true, "hi", 4, "yes", "bye", null, 8 ],
  ],
  [
    [ true, "hi", 4, "yes", null, 8 ],
    3,
    ["bye", 3],
    [ true, "hi", 4, "yes", "bye", 3, null, 8 ],
  ],
  [
    [ true, "hi", 4, "yes", null, 8 ],
    0,
    null,
    [ true, null, "hi", 4, "yes", null, 8 ],
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

  const result =
    insertInArray(test, indexThatIsBefore, arrayOrPrimitiveToInsert);
  console.log("Inserted array: ", result);

  console.log("Expected array: ", utArray[i][3]);
};
console.log();
