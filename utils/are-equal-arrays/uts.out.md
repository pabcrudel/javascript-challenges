# Unit Testing: Equal Array

Disclaimer: In order to see the array in one line, it has been used `JSON.stringify(arr, null, 0)` which transforms `<empty slot>`,  `NaN` and `undefined` into `null`.

## UT: Are strict equal primitive Array

| Number | Status | Arr 1 | Arr 2 | Expected Equality | Equality |
|-|-|-|-|-|-|
| 1 | Pass | [1,2,3,4] | [1,2,3,4] | true | true |
| 2 | Pass | [1,null,3,4] | [1,2,3,4] | false | false |
| 3 | Pass | [1,2,3] | [1,2,3,4] | false | false |
| 4 | Pass | [1,2,null] | [1,2,3] | false | false |
| 5 | Pass | [1,2,null] | [1,2,null] | true | true |
| 6 | Pass | [1,""] | [1,""] | true | true |
| 7 | Pass | ["Hello","world"] | ["Hello","UT"] | false | false |
| 8 | Pass | ["Pablo","Cru"] | ["Pablo","Cru"] | true | true |
| 9 | Pass | [null,true] | [null,true] | true | true |
| 10 | Pass | [{}] | [{}] | false | false |
| 11 | Pass | [{"a":3,"b":"","c":null}] | [{"a":3,"b":"","c":null}] | true | true |
| 12 | Pass | [{"a":3,"b":"","c":null}] | [{"a":3,"b":"","c":null}] | false | false |
| 13 | Pass | [ [] ] | [ [] ] | false | false |
| 14 | Pass | [ ["Unit","Testing"] ] | [ ["Unit","Testing"] ] | true | true |
| 15 | Pass | [ ["Unit","Testing"] ] | [ ["Unit","Testing"] ] | false | false |
| 16 | Pass | [{}] | [ [] ] | false | false |
| 17 | Pass | [ [] ] | [2] | false | false |
| 18 | Pass | [{}] | [3] | false | false |
| 19 | Pass | [null] | [null] | true | true |
| 20 | Pass | [true,null,"hi",4,"yes",null,8] | [true,null,"hi",4,"yes",null,8] | true | true |

Fails: 0
