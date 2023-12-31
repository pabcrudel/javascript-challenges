# Unit Testing: Clean Array

Disclaimer: In order to see the array in one line, it has been used `JSON.stringify` which transforms any nullish into `null`. However, I stringify this values except `<empty slot>`, that is transformed into `undefined`.

## UT: Deep cleaning (recursive)

| Number | Status | Original Arr | Expected Arr | Result Arr |
| - | - | - | - | - |
| 1 | Pass | [3,"undefined",[2,4,"undefined",null],"undefined",4,"undefined",5,null,{"a":6},[7,8,[null],null,9],10] | [3,[2,4,"undefined",null],4,5,{"a":6},[7,8,[null],null,9],10] | [3,[2,4,"undefined",null],4,5,{"a":6},[7,8,[null],null,9],10] |
| 2 | Pass | ["NaN",["undefined",""],"undefined",[],[ [null],{}] ] | ["NaN",["undefined",""],[],[ [null],{}] ] | ["NaN",["undefined",""],[],[ [null],{}] ] |
| 3 | Pass | ["undefined",["undefined",null],"undefined","NaN",[[""],null],"undefined"] | [ ["undefined",null],"NaN",[[""],null] ] | [ ["undefined",null],"NaN",[[""],null] ] |
| 4 | Pass | [3,"undefined","undefined","undefined",4,"undefined",5,null,{"a":6},[7,8,[null],null,9],10] | [3,4,5,{"a":6},[7,8,[null],null,9],10] | [3,4,5,{"a":6},[7,8,[null],null,9],10] |
| 5 | Pass | [null,3,"undefined",5,"undefined"] | [3,5] | [3,5] |
| 6 | Pass | [] | [] | [] |
| 7 | Pass | [null,"undefined","undefined"] | [] | [] |
| 8 | Pass | [3,null,"undefined","undefined",5] | [3,5] | [3,5] |
| 9 | Pass | [1,2,3,"undefined",null,"undefined",4,"undefined","undefined",5] | [1,2,3,4,5] | [1,2,3,4,5] |

Fails: 0
