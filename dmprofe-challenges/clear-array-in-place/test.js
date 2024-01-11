/* eslint-disable no-sparse-arrays */
'use strict';

const { cleanArrayInPlace } = require('./main.js');
const { areStrictEqualArraysNonRecursive } =
  require('../../utils/are-equal-arrays/main.js');
const { stringifyArray } = require('../../utils/stringify-array/main.js');
const { utsFunction } = require('../../utils/unit-testings/main.js');

const arr1 = [2, 4, undefined, null];
const arr2 = [7, 8, [null], null, 9];
const arr3 = [undefined, ''];
const arr4 = [[null], {}];
const arr5 = [];
const arr6 = [undefined, null];
const arr7 = [[''], null];
const arr8 = [7, 8, [null], null, 9];

const obj1 = { a: 6 };

/** Unit Testings
 * - [0] Raw Array
 * - [1] Expected Clean Array
 */
const utsBattery = [
  [
    [3, , arr1, , 4, undefined, 5, null, obj1, arr2, 10],
    [3, arr1, 4, 5, obj1, arr2, 10]
  ],
  [[NaN, arr3, , arr5, arr4], [NaN, arr3, arr5, arr4]],
  [[, arr6, , NaN, arr7, undefined], [arr6, NaN, arr7]],
  [
    [3, , , , 4, undefined, 5, null, obj1, arr8, 10],
    [3, 4, 5, obj1, arr8, 10]
  ],
  [[null, 3, , 5, undefined], [3, 5]],
  [[], []],
  [[null, undefined, ,], []],
  [[3, null, undefined, , 5], [3, 5]],
  [[1, 2, 3,, null,, 4,, undefined, 5], [1, 2, 3, 4, 5]]
];
const utsTitle = 'Clean Array';
const utsData = [
  {
    utTitle: 'Deep cleaning (recursive)',
    utOutputHeadings: ['Original Arr', 'Expected Arr', 'Result Arr'],
    utFunction: function (utItem) {
      const [originalArr, expected] = utItem;

      const result = [...originalArr];
      cleanArrayInPlace(result);

      const status = areStrictEqualArraysNonRecursive(expected, result);

      const message = stringifyArray(originalArr) + ' | ' +
        stringifyArray(expected) + ' | ' + stringifyArray(result);

      return { status, message };
    }
  }
];
utsFunction(utsTitle, utsBattery, utsData);
