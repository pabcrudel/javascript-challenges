// An occasional infinite loop
// This loop is infinite. It never ends. Why?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

/** My solution
 *
 * i = 9
 * i += 0.2 -> 9.2
 * i += 0.2 -> 9.399999999999999
 * i += 0.2 -> 9.599999999999998
 * i += 0.2 -> 9.799999999999997
 * i += 0.2 -> 9.999999999999996
 * i += 0.2 -> 10.199999999999996
 *
 * Because of the precision loose.
 */
