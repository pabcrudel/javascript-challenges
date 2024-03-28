'use strict';

const { sortedCopy } = require('./main.js');
const { areStrictEqualArraysNonRecursive } =
  require('../../utils/are-equal-arrays/main.js');

const objMocks = {
  pablo: { name: 'Pablo', age: 27 },
  daniel: { name: 'Daniel', age: 20 },
  random: { name: 'anonymous', age: NaN }
};

const arrMocks = [
  {
    raw: [objMocks.pablo, objMocks.daniel],
    ordered: [objMocks.daniel, objMocks.pablo]
  },
  {
    raw: [objMocks.pablo, objMocks.random],
    ordered: [objMocks.pablo, objMocks.random]
  }
];

/** Unit Testings
 * - [0] Raw Array
 * - [1] Expected ordered Array
 */
const utsBattery = [
  [
    arrMocks[0].raw,
    arrMocks[0].raw
  ],
  [
    arrMocks[0].ordered,
    arrMocks[0].ordered
  ],
  [
    arrMocks[0].raw,
    arrMocks[0].ordered
  ],
  [
    arrMocks[1].raw,
    arrMocks[1].ordered
  ]
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
