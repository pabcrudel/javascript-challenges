// Sum numbers from the visitor
// Create a script that prompts the visitor to enter two numbers and then shows
// their sum.

// P.S. There is a gotcha with types.

function sumNumbersFromVisitor (num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log(NaN);
    return;
  }
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    console.log(Infinity);
    return;
  }

  return console.log(num1 + num2);
}

sumNumbersFromVisitor('3.2', '4');
sumNumbersFromVisitor(null, 'hello');
sumNumbersFromVisitor('3e2', '2');
sumNumbersFromVisitor(Infinity, '1');
sumNumbersFromVisitor(NaN, '3');
