"use strict";

const { areStrictEqualArraysNonRecursive } = require('./main.js');
const { stringifyArray } = require('../stringify-array/main.js');

const utObj1 = { a: 3, b: "", c: null };
const utObj2 = { a: 3, b: "", c: null };
const utObj3 = utObj1;
const utArr1 = [ "Daniel", "Pablo" ];
const utArr2 = [ "Daniel", "Pablo" ];
const utArr3 = utArr1;

const utArr4 = [utObj1, 3];
const utArr5 = [utObj2, 3];
const utArr6 = [utObj3, 3];

/** Equality Unit Testings
 * - [0]: Arr 1
 * - [1]: Arr 2
 * - [3]: Expected Equality
 * - [4]: Description
 */
const utBattery = [
  [ [1, 2, 3, 4], [1, 2, 3, 4], true, ],
  [ [1, null, 3, 4], [1, 2, 3, 4], false, ],
  [ [1, 2, 3], [1, 2, 3, 4], false ],
  [ [1, 2, NaN], [1, 2, 3], false ],
  [ [1, 2, NaN], [1, 2, NaN], true ],
  [ [1, ""], [1, ""], true ],
  [ ["Hello", "world"], ["Hello", "UT"], false ],
  [ ["Pablo", "Cru"], ["Pablo", "Cru"], true ],
  [ [undefined, true], [undefined, true], true ],
  [ [{}], [{}], false, "Empty objects declared inside the array" ],
  [ [utObj1], [utObj1], true, "Same object declared at the beginning" ],
  [ [utObj1], [utObj2], false, "Different object but same properties" ],
  [ [utObj1], [utObj3], true, "Object 3 is assigned from object 1" ],
  [ [[]], [[]], false, "Empty arrays declared inside the array" ],
  [ [utArr1], [utArr1], true, "Same arrays declared at the beginning" ],
  [ [utArr2], [utArr1], false, "Different arrays but same properties" ],
  [ [utArr1], [utArr3], true, "Array 3 is assigned from array 1" ],
  [ utArr4, utArr5, false, "Objects with different memory addresses" ],
  [ utArr4, utArr6, true, "Objects with same memory addresses" ],
  [ [{}], [[]], false ],
  [ [[]], [2], false ],
  [ [{}], [3], false ],
  [ [,], [,], true, "2 `<empty slot>` in different arrays" ],
  [
    [ true, null, "hi", 4, "yes", null, 8 ],
    [ true, null, "hi", 4, "yes", null, 8 ],
    true
  ]
];

console.log("# Unit Testing: Equal Array\n");
console.log(
  "Disclaimer: In order to see the array in one line, it has been " +
  "used \`JSON.stringify\` which transforms \`<empty slot>\`, " +
  " into \`undefined\`.\n"
);
ut(
  "Are strict equal primitive Array",
  utBattery,
  areStrictEqualArraysNonRecursive
);

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
    const statusLog = status ? "Pass" : "Fail";

    console.log(`| ${i + 1} | ${statusLog} |`,stringifyArray(arr1),
      "|",stringifyArray(arr2),`| ${expected} | ${equality} |`);

    // Because of "!", True = 0 & False = 1;
    failCounter += !status;
  };
  console.log("\nFails:", failCounter);
};
