"use strict";

function stringifyArray(arr) {
  const stringArr = JSON.stringify(arr, null, 0);

  var regExp = /\[\[\s*([^]*?)\s*\]\]/g;

  return stringArr.replace(regExp, "[ [$1] ]");
};

module.exports = { stringifyArray };