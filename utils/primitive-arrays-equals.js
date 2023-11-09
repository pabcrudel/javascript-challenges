function primitiveArraysEquals(arrayA, arrayB) {
  let areEq = true;

  const lengthA = arrayA.length,
    lengthB = arrayB.length;

  if (lengthA === lengthB) {
    for (let i = 0; areEq && i < lengthA; i++) {
      if (arrayA [i] !== arrayB[i]) areEq = false;
    };
  }
  else areEq = false;

  return areEq;
};