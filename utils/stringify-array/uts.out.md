# Unit Testing: Markdown link error and represent types not supported by JSON

Disclaimer: In order to see the array in one line, it has been used `JSON.stringify` which transforms any nullish into `null`. However, I stringify this values except `<empty slot>`, that is transformed into `undefined`.

## UT: Stringify items

| Number | Status | Expected output | Output |
| - | - | - | - |
| 1 | Pass | "[ [{}] ]" | "[ [{}] ]" |
| 2 | Pass | [ [{}] ] | [ [{}] ] |
| 3 | Pass | "Hello [ [world] ]" | "Hello [ [world] ]" |
| 4 | Pass | [2,"Hi",[ ["45n"] ]] | [2,"Hi",[ ["45n"] ]] |
| 5 | Pass | [null,"undefined",[ ["undefined"] ]] | [null,"undefined",[ ["undefined"] ]] |
| 6 | Fail | [2,[ [ [ ["undefined"] ] ] ], [ [""] ]] | [2,[ [[["undefined"] ]]],[ [""] ]] |

Fails: 1
