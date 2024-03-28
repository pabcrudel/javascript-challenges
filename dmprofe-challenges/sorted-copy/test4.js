'use strict';

const { areStrictEqualArraysNonRecursive } =
  require('../../utils/are-equal-arrays/main.js');

const uts = [
  [
    [{ name: 'Pablo', age: 27 }],
    [{ name: 'Pablo', age: 27 }]
  ]
];

function utsFunction (uts) {
  uts.forEach(([a, b]) => {
    console.log(areStrictEqualArraysNonRecursive(a, b));
  });
}
utsFunction(uts);
