'use strict';

const { areStrictEqualArraysNonRecursive } =
  require('../../utils/are-equal-arrays/main.js');

const uts = [
  [
    [1, 2, 3],
    [1, 2, 3]
  ],
  [
    [1, 2, 3],
    [3, 2, 1]
  ],
  [
    ['5', NaN, undefined, Infinity],
    ['5', NaN, undefined, Infinity]
  ]
];

function utsFunction (uts) {
  uts.forEach(([a, b]) => {
    console.log(areStrictEqualArraysNonRecursive(a, b));
  });
}
utsFunction(uts);
