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
  "originalArr", "indexThatIsBefore", "arrayOrPrimitiveToInsert",
  "Expected Array", "Result",
];

function insertUtFunction(utItem, fnVersion) {
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

  const status = areStrictEqualArraysNonRecursive(expected, result);

  const message = stringifyArray(originalArr) + " | " + indexBefore + " | " +
    stringifyArray(insert) + " | " + stringifyArray(expected) + " | " +
    stringifyArray(result);

  return {status, message};
};

const utsData = [
  {
    utTitle: "Return new array",
    utOutputHeadings,
    utFunction: (utItem) => insertUtFunction(utItem, 1),
  },
  {
    utTitle: "Insert in place",
    utOutputHeadings,
    utFunction: (utItem) => insertUtFunction(utItem, 2),
  }
];
utsFunction(utsTitle, utsBattery, utsData);
