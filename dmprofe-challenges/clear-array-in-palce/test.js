import cleanArrayInPlace from './main.js';

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
      , [undefined, null], , null,
      [ [null], null, ],
    ],
    [],
  ],
];

const length = utArray.length;
for (let i = 0; i < length; i++) {
  console.log(`Test number: ${i + 1}`);
  const test = utArray[i][0];
  console.log("Original array: ", test);

  cleanArrayInPlace(test);
  console.log("Cleaned array: ", test);
  console.log("Expected array: ", utArray[i][1], "\n");
};