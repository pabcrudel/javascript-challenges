"use strict";

const { cleanArrayInPlace } = require('./main.js');
const { areStrictEqualArraysNonRecursive } =
  require('../../utils/are-equal-arrays/main.js');
const { stringifyArray } = require('../../utils/stringify-array/main.js');
const { utsFunction } = require("../../utils/unit-testings/main.js");

/** Unit Testings
 * - [0] Raw Array
 * - [1] Expected Clean Array
 */
const utsBattery = [
  [
    [
      3, , [2,4,undefined, null], , 4, undefined, 5, null,
      { a: 6 }, [ 7, 8, [null], null, 9 ], 10
    ],
    [3, [2,4], 4, 5, { a: 6 }, [ 7, 8, 9 ], 10]
  ],
  [
    [NaN, [undefined, ""], , [],[ [null], {}, ],],
    [[{}]],
  ],
  [
    [, [undefined, null], , NaN,[ [""], null, ],],
    [],
  ],
];
const utsTitle = "Clean Array";
const utsData = [
  {
    utTitle: "Deep cleaning (recursive)",
    utOutputHeadings: ["Original Arr", "Expected Arr", "Result Arr"],
    utFunction: function(utItem){
      const [ originalArr, expected ] = utItem;
  
      const result = [...originalArr];
      cleanArrayInPlace(result);
  
      const status = areStrictEqualArraysNonRecursive(expected, result);
  
      const message = stringifyArray(originalArr) + " | " +
        stringifyArray(expected) + " | " + stringifyArray(result);
  
      return {status, message};
    },
  }
];
utsFunction(utsTitle, utsBattery, utsData);
