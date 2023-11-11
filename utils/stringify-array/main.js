"use strict";

/** Stringify arrays in JSON format avoiding Markdown rendering errors and
 * nullish values wrong representations. */
function stringifyArray(arr) {
  const stringArr =
    JSON.stringify(arr, (key, value) => stringifyNullish(value), 0);

  /**
   * Markdown output table renders `[[<content>]]` as a broken link. In order
   * to avoid that, I use this regular expression to catch it and display white
   * space between square brackets: `[ [<content>] ]`.
  */
  var brokenLink = /\[\[\s*([^]*?)\s*\]\]/g;

  return stringArr.replace(brokenLink, "[ [$1] ]");
};

/** JSON.stringify() changes all nullish values into null. However, in order to
 * display these values, a string that represents them will be returned. */
function stringifyNullish(value) {
  if (typeof value === 'undefined') return "undefined";

  /* Is being used `Number.isNaN()` because
    `isNaN()` casts strings into numbers:
      - Number.isNaN("asdf") => false;
      - Number.isNaN(+"asdf") => true;
      - isNaN("asdf") => true;
      - isNaN(+"asdf") => true;
  */
  if (Number.isNaN(value)) return "NaN";

  return value;
};

module.exports = { stringifyArray };
