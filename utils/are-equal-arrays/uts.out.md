# Unit Testing: Equal Array

Disclaimer: In order to see the array in one line, it has been used `JSON.stringify` which transforms any nullish into `null`. However, I stringify this values except `<empty slot>`, that is transformed into `undefined`.

## UT: Are strict equal primitive Array

| Number | Status | Arr 1 | Arr 2 | Expected Equality | Equality |
| - | - | - | - | - | - |
| 1 | Pass | [1,2,3,4] | [1,2,3,4] | true | true |
| 2 | Pass | [1,null,3,4] | [1,2,3,4] | false | false |
| 3 | Pass | [1,2,3] | [1,2,3,4] | false | false |
| 4 | Pass | [1,2,"NaN"] | [1,2,3] | false | false |
| 5 | Pass | [1,2,"NaN"] | [1,2,"NaN"] | true | true |
| 6 | Pass | [1,""] | [1,""] | true | true |
| 7 | Pass | ["Hello","world"] | ["Hello","UT"] | false | false |
| 8 | Pass | ["Pablo","Cru"] | ["Pablo","Cru"] | true | true |
| 9 | Pass | ["undefined",true] | ["undefined",true] | true | true |
| 10 | Pass | [{}] | [{}] | false | false |
| 11 | Pass | [{"a":3,"b":"","c":null}] | [{"a":3,"b":"","c":null}] | true | true |
| 12 | Pass | [{"a":3,"b":"","c":null}] | [{"a":3,"b":"","c":null}] | false | false |
| 13 | Pass | [{"a":3,"b":"","c":null}] | [{"a":3,"b":"","c":null}] | true | true |
| 14 | Pass | [ [] ] | [ [] ] | false | false |
| 15 | Pass | [ ["Daniel","Pablo"] ] | [ ["Daniel","Pablo"] ] | true | true |
| 16 | Pass | [ ["Daniel","Pablo"] ] | [ ["Daniel","Pablo"] ] | false | false |
| 17 | Pass | [ ["Daniel","Pablo"] ] | [ ["Daniel","Pablo"] ] | true | true |
| 18 | Pass | [{"a":3,"b":"","c":null},3] | [{"a":3,"b":"","c":null},3] | false | false |
| 19 | Pass | [{"a":3,"b":"","c":null},3] | [{"a":3,"b":"","c":null},3] | true | true |
| 20 | Pass | [{}] | [ [] ] | false | false |
| 21 | Pass | [ [] ] | [2] | false | false |
| 22 | Pass | [{}] | [3] | false | false |
| 23 | Pass | ["undefined"] | ["undefined"] | true | true |
| 24 | Pass | [true,null,"hi",4,"yes",null,8] | [true,null,"hi",4,"yes",null,8] | true | true |

Fails: 0
