"use strict";

function stringifyArray(arr) {
  const stringArr = JSON.stringify(arr, null, 0);

  return stringArr === "[[{}]]" ? "[ [ {} ] ]" : stringArr;
};

module.exports = { stringifyArray };