'use strict';

const { areStrictEqualArraysNonRecursive } =
  require('../../utils/are-equal-arrays/main.js');

const mockObj = [
  { name: 'Pablo', age: 27 },
  { name: 'Daniel', age: 20 }
];

const mockArr = [
  [mockObj[0], mockObj[1]],
  [mockObj[0], mockObj[1]],
  [mockObj[1], mockObj[1]]
];

const uts = [
  [
    mockArr[0],
    mockArr[0]
  ],
  [
    mockArr[0],
    mockArr[1]
  ],
  [
    mockArr[2],
    mockArr[2]
  ],
  [
    mockArr[0],
    mockArr[2]
  ]
];

function utsFunction (uts) {
  uts.forEach(([a, b]) => {
    console.log(areStrictEqualArraysNonRecursive(a, b));
  });
}
utsFunction(uts);
