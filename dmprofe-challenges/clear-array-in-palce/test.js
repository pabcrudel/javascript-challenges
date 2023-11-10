"use strict";

const { cleanArrayInPlace } = require('./main.js');
const { areStrictEqualPrimitiveArrays } =
  require('../../utils/are-equal-arrays/main.js');
const { stringifyArray } = require('../../utils/stringify-array/main.js');

/** Unit Testings
 * - [0] Raw Array
 * - [1] Expected Clean Array
 */
const utArray = [
  [
    [
      3, , [2,4,undefined, null], , 4, undefined, 5, null,
      { a: 6 }, [ 7, 8, [null], null, 9 ], 10
    ],
    [
      3, [2,4], 4, 5, { a: 6 }, [ 7, 8, 9 ], 10
    ]
  ],
  [
    [
      NaN, [undefined, ""], , [],
      [ [null], {}, ],
    ],
    [[{}]],
  ],
  [
    [
      , [undefined, null], , NaN,
      [ [""], null, ],
    ],
    [],
  ],
];

console.log("# Unit Testing: Clean Array\n");
console.log(
  "Disclaimer: In order to see the array in one line, it has been " +
  "used \`JSON.stringify(arr, null, 0)\` which transforms \`<empty slot>\`, " +
  " \`NaN\` and \`undefined\` into \`null\`.\n"
);
ut("Clean Array Recursively", utArray, cleanArrayInPlace);

function ut(title, uts, utFunction) {
  console.log(`## UT: ${title}\n`);
  console.log("| Number | Status | Original Arr | Expected Arr | Result Arr |");
  console.log("|-|-|-|-|-|");

  let failCounter = 0;
  for (let i = 0; i < uts.length; i++) {
    const ut = uts[i];

    const originalArr = ut[0],
      expected = ut[1];

    const result = [...originalArr];
    utFunction(result);

    const status = areStrictEqualPrimitiveArrays(expected, result);
    const statusLog = status ? "Pass" : "Fail";

    console.log(`| ${i + 1} | ${statusLog} |`,stringifyArray(originalArr),
      "|",stringifyArray(expected),"|",stringifyArray(result));

    // Because of "!", True = 0 & False = 1;
    failCounter += !status;
  };
  console.log("Fails:", failCounter);
};
