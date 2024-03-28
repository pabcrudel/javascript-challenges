// A random number from min to max
// The built-in function Math.random() creates a random value from 0 to 1 (not
// including 1).

// Write the function random(min, max) to generate a random floating-point
// number from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

/** solution
 * source: https://javascript.info/number#a-random-number-from-min-to-max

We need to "map" all values from the interval 0..1 into values from min to max.

That can be done in two stages:

If we multiply a random number from 0..1 by max-min, then the interval of
possible values increases 0..1 to 0..max-min.
Now if we add min, the possible interval becomes from min to max.
The function:

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

 */
