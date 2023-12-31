# Unit Testing: Insert in Array

Disclaimer: In order to see the array in one line, it has been used `JSON.stringify` which transforms any nullish into `null`. However, I stringify this values except `<empty slot>`, that is transformed into `undefined`.

## UT: Return new array

| Number | Status | originalArr | indexThatIsBefore | arrayOrPrimitiveToInsert | Expected Array | Result |
| - | - | - | - | - | - | - |
| 1 | Pass | [true,"hi",4,"yes",null,8] | 3 | "bye" | [true,"hi",4,"yes","bye",null,8] | [true,"hi",4,"yes","bye",null,8] |
| 2 | Pass | [true,"hi",4,"yes",null,8] | 3 | ["bye",3] | [true,"hi",4,"yes","bye",3,null,8] | [true,"hi",4,"yes","bye",3,null,8] |
| 3 | Pass | [true,"hi",4,"yes",null,8] | 0 | null | [true,null,"hi",4,"yes",null,8] | [true,null,"hi",4,"yes",null,8] |
| 4 | Pass | [8,9] | 0 | "Hi" | [8,"Hi",9] | [8,"Hi",9] |
| 5 | Pass | ["First","Second","Third"] | 1 | null | ["First","Second",null,"Third"] | ["First","Second",null,"Third"] |
| 6 | Pass | ["First","Second","Third"] | 0 | ["One who was closer","Another one closer"] | ["First","One who was closer","Another one closer","Second","Third"] | ["First","One who was closer","Another one closer","Second","Third"] |

Fails: 0

## UT: Insert in place

| Number | Status | originalArr | indexThatIsBefore | arrayOrPrimitiveToInsert | Expected Array | Result |
| - | - | - | - | - | - | - |
| 1 | Pass | [true,"hi",4,"yes",null,8] | 3 | "bye" | [true,"hi",4,"yes","bye",null,8] | [true,"hi",4,"yes","bye",null,8] |
| 2 | Pass | [true,"hi",4,"yes",null,8] | 3 | ["bye",3] | [true,"hi",4,"yes","bye",3,null,8] | [true,"hi",4,"yes","bye",3,null,8] |
| 3 | Pass | [true,"hi",4,"yes",null,8] | 0 | null | [true,null,"hi",4,"yes",null,8] | [true,null,"hi",4,"yes",null,8] |
| 4 | Pass | [8,9] | 0 | "Hi" | [8,"Hi",9] | [8,"Hi",9] |
| 5 | Pass | ["First","Second","Third"] | 1 | null | ["First","Second",null,"Third"] | ["First","Second",null,"Third"] |
| 6 | Pass | ["First","Second","Third"] | 0 | ["One who was closer","Another one closer"] | ["First","One who was closer","Another one closer","Second","Third"] | ["First","One who was closer","Another one closer","Second","Third"] |

Fails: 0
