'use strict';

const { sortedCopy } = require('./main.js');
const { areStrictEqualArraysNonRecursive } =
  require('../../utils/are-equal-arrays/main.js');

const mocks = [
  {
    raw: [3, 2, 1],
    ordered: [1, 2, 3]
  }
];

/** Unit Testings
 * - [0] Raw Array
 * - [1] Expected ordered Array
 */
const utsBattery = [
  [mocks[0].raw, mocks[0].raw],
  [mocks[0].ordered, mocks[0].ordered],
  [mocks[0].raw, mocks[0].ordered]
];

function utsFunction (utsBattery) {
  utsBattery.forEach(([raw, expected], index) => {
    const response = sortedCopy(raw);

    console.log(
      index + 1,
      'Are copies of the same array non recursive?',
      areStrictEqualArraysNonRecursive(response, expected)
    );
  });
}
utsFunction(utsBattery);
