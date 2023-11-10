"use strict";

function areStrictEqualArraysNonRecursive(arr1, arr2) {
  const len1 = arr1.length,
    len2 = arr2.length;

  // If they have different lengths, they aren't equals.
  if (len1 !== len2) return false;

  // If there are any item which is different, they aren't equals.
  for (let i = 0; i < len1; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];

    if (!nanValidation(item1, item2) && item1 !== item2 ) return false;
  };

  // Else, they are equals
  return true;
};

/** If both are numbers and NaN, they are equals. */
function nanValidation(item1, item2) {
  return (typeof item1 === 'number' && isNaN(item1))
  && (typeof item2 === 'number' && isNaN(item2));
};

module.exports = {
  areStrictEqualArraysNonRecursive,
};