# Unit Testing: Clean Array

Disclaimer: In order to see the array in one line, it has been used `JSON.stringify(arr, null, 0)` which transforms `<empty slot>`,  `NaN` and `undefined` into `null`.

## UT: Clean Array Recursively

| Number | Status | Original Arr | Expected Arr | Result Arr |
|-|-|-|-|-|
| 1 | Pass | [3,null,[2,4],null,4,null,5,null,{"a":6},[7,8,9],10] | [3,[2,4],4,5,{"a":6},[7,8,9],10] | [3,[2,4],4,5,{"a":6},[7,8,9],10]
| 2 | Pass | [null,[],null,[],[{}]] | [ [ {} ] ] | [ [ {} ] ]
| 3 | Pass | [null,[],null,null,[]] | [] | []

Fails: 0