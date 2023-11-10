"use strict";

const { areStrictEqualPrimitiveArrays } = require('./main.js');

/** Equality Unit Testings
 * - [0]: Arr 1
 * - [1]: Arr 2
 * - [3]: Expected Equality
 */
const utArray = [
  [ [1, 2, 3, 4], [1, 2, 3, 4], true ],
  [ [1, null, 3, 4], [1, 2, 3, 4], false ],
  [ [1, 2, 3], [1, 2, 3, 4], false ],
  [ [1, 2, NaN], [1, 2, 3], false ],
  [ [1, 2, NaN], [1, 2, NaN], true ],
  [ [1, ""], [1, ""], true ],
  [ ["Hello", "world"], ["Hello", "UT"], false ],
  [ ["Pablo", "Cru"], ["Pablo", "Cru"], true ],
  [ [undefined, true], [undefined, true], true ],
  [ [[]], [[]], true ],
  [ [{}], [{}], true ],
  [ [[]], [{}], false ],
  [ [{}], [[]], false ],
  [ [[]], [2], false ],
  [ [{}], [3], false ],
];

console.log("# Unit Testing: Equal Array\n");
ut("Are strict equal primitive Array", utArray, areStrictEqualPrimitiveArrays);

function ut(title, uts, utFunction) {
  console.log(`## UT: ${title}\n`);
  console.log("| Number | Status | Arr 1 | Arr 2 " +
  "| Expected Equality | Equality |");
  console.log("|-|-|-|-|-|-|");

  let failCounter = 0;
  for (let i = 0; i < uts.length; i++) {
    const ut = uts[i];

    const arr1 = ut[0];
    const arr2 = ut[1];
    const equality = utFunction(arr1, arr2);

    const expected = ut[2];
    const status = equality === expected;
    const statusLog = status ?  "Pass" : "Fail";

    console.log(`| ${i} | ${statusLog} |`,arr1,"|",arr2,
      `| ${expected} | ${equality} |`);

    // Because of "!", True = 0 & False = 1;
    failCounter += !status;
  };
  console.log("Fails:", failCounter);
};
