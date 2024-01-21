/* Sum object properties
 * We have an object storing salaries of our team:
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

/*
 * Write the code to sum all salaries and store in the variable sum.
 * Should be 390 in the example above.
 *
 * If salaries is empty, then the result must be 0.
 */

function sumSalaries (salaries) {
  let sum = 0;

  for (const key in salaries) {
    sum += salaries[key];
  }

  return sum;
}

console.log(sumSalaries(salaries));
console.log(sumSalaries({}));
