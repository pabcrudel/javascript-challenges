/* eslint-disable no-sparse-arrays */
'use strict';

const { stringifyArray } = require('./main.js');
const { utsFunction } = require('../unit-testings/main.js');

/**
 * - [0] Original entry
 * - [1] Expected output
 */
const utsBattery = [
  [
    '[[{}]]',
    '"[ [{}] ]"'
  ],
  [
    [[{}]],
    '[ [{}] ]'
  ],
  [
    'Hello [[world]]',
    '"Hello [ [world] ]"'
  ],
  [
    [2, 'Hi', [[45n]]],
    '[2,"Hi",[ ["45n"] ]]'
  ],
  [
    [null, , [[undefined]]],
    '[null,"undefined",[ ["undefined"] ]]'
  ],
  [
    [2, [[[[,]]]], [['']]],
    '[2,[ [ [ ["undefined"] ] ] ], [ [""] ]]'
  ]
];
const utsTitle =
  'Markdown link error and represent types not supported by JSON';
const utsData = [
  {
    utTitle: 'Stringify items',
    utOutputHeadings: ['Expected output', 'Output'],
    utFunction: function (utItem) {
      const [entry, expected] = utItem;

      const output = stringifyArray(entry);
      const status = output === expected;

      const message = expected + ' | ' + output;

      return { status, message };
    }
  }
];
utsFunction(utsTitle, utsBattery, utsData);
