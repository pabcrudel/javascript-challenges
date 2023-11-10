"use strict";

function areStrictEqualPrimitiveArrays(arr1, arr2) {
  const len1 = arr1.length,
    len2 = arr2.length;

  // If they have different lengths, they aren't equals.
  if (len1 !== len2) return false;

  /** If both are Arrays or Objects, they are equals.
    - Why `item1.length === item2.length`:
        - `Object.length => undefined` !== `Array.length => number`
        - `Array.length => 5` !== `Array.length => 7`
  */
  const objectValidation = (item1, item2) =>
    (typeof item1 === 'object' && item1 !== null)
    && (typeof item2 === 'object' && item2 !== null)
    && item1.length === item2.length;

  // If both are numbers and NaN, they are equals.
  const nanValidation = (item1, item2) =>
  (typeof item1 === 'number' && isNaN(item1))
  && (typeof item2 === 'number' && isNaN(item2));

  // If there are any item which is different, they aren't equals.
  for (let i = 0; i < len1; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];

    if (
      !objectValidation(item1, item2)
      && !nanValidation(item1, item2)
      && item1 !== item2
    ) return false;
  }

  // Else, they are equals
  return true;
};

module.exports = {
  areStrictEqualPrimitiveArrays,
};