"use strict";

const { insertInArray, insertInArrayInPlace } = require('./main.js');
const { areStrictEqualPrimitiveArrays } =
  require('../../utils/are-equal-arrays/main.js');


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

console.log("# Unit Testing: Insert in Array\n");
console.log(
  "Disclaimer: In order to see the array in one line, it has been " +
  "used \`JSON.stringify(arr, null, 0)\` which transforms \`<empty slot>\`, " +
  " \`NaN\` and \`undefined\` into \`null\`.\n"
);
ut("Insert in Array", utArray, 1);
console.log();
ut("Insert in Array in place", utArray, 2);

function ut(title, uts, functionType) {
  console.log(`## UT: ${title}\n`);
  console.log("| Number | Status | originalArr | indexThatIsBefore " +
  "| arrayOrPrimitiveToInsert | Expected Array | Result |");
  console.log("|-|-|-|-|-|-|-|");

  let failCounter = 0;
  for (let i = 0; i < uts.length; i++) {
    const ut = uts[i];

    const originalArr = ut[0],
      indexBefore = ut[1],
      insert = ut[2],
      expected = ut[3];
    
    let result;
    switch (functionType) {
      case 1:
        result = insertInArray(originalArr, indexBefore, insert);
        break;
      case 2:
        result = [...originalArr];
        insertInArrayInPlace(result, indexBefore, insert);
        break;
      default:
        break;
    };

    const equality = areStrictEqualPrimitiveArrays(expected, result);
    const statusLog = equality ?  "Pass" : "Fail";

    console.log(
      `| ${i + 1} | ${statusLog} |`,JSON.stringify(originalArr, null, 0),
      `| ${indexBefore} |`,JSON.stringify(insert, null, 0),"|",
      JSON.stringify(expected, null, 0), "|",
      JSON.stringify(result, null, 0), "|"
    );

    // Because of "!", True = 0 & False = 1;
    failCounter += !equality;
  };
  console.log(`Fails: ${failCounter}`);
};
