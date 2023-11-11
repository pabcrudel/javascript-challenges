"use strict";

const { insertInArray, insertInArrayInPlace } = require('./main.js');
const { areStrictEqualArraysNonRecursive } =
  require('../../utils/are-equal-arrays/main.js');
const { stringifyArray } = require('../../utils/stringify-array/main.js');
const { utsFunction } = require("../../utils/unit-testings/main.js");


/** Unit Testings
 * - [0] Raw Array
 * - [1] indexThatIsBefore
 * - [2] arrayOrPrimitiveToInsert
 * - [3] Expected Inserted Array
 */
const utsBattery = [
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
const utsTitle = "Insert in Array";
const utOutputHeadings = [
  "Number", "Status", "originalArr", "indexThatIsBefore",
  "arrayOrPrimitiveToInsert", "Expected Array", "Result",
];

function insetUtFunction(testNumber, utItem, fnVersion) {
  const [ originalArr, indexBefore, insert, expected ] = utItem;

  let result;
  switch(fnVersion) {
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

  const equality = areStrictEqualArraysNonRecursive(expected, result);
  const statusLog = equality ? "Pass" : "Fail";

  console.log(
    `| ${testNumber} | ${statusLog} |`,stringifyArray(originalArr),
    `| ${indexBefore} |`,stringifyArray(insert),"|",
    stringifyArray(expected), "|",
    stringifyArray(result), "|"
  );

  // Because of "!", True = 0 & False = 1;
  return !equality;
};

const utsData = [
  {
    utTitle: "Return new array",
    utOutputHeadings,
    utFunction: (testNumber, utItem) => insetUtFunction(testNumber, utItem, 1),
  },
  {
    utTitle: "Insert in place",
    utOutputHeadings,
    utFunction: (testNumber, utItem) => insetUtFunction(testNumber, utItem, 2),
  }
];
utsFunction(utsTitle, utsBattery, utsData);
