"use strict";

function utsFunction(utsTitle, utsBattery, utsData) {
  if (utsData.length) {
    console.log(`# Unit Testing: ${utsTitle}\n`);
    console.log(
      "Disclaimer: In order to see the array in one line, it has been " +
      "used \`JSON.stringify\` which transforms any nullish into `null`. " +
      "However, I stringify this values except \`<empty slot>\`, that is " +
      "transformed into \`undefined\`."
    );
  
    for (const utData of utsData) {
      const { utTitle, utOutputHeadings, utFunction } = utData;

      console.log(`\n## UT: ${utTitle}\n`);
    
      const headings = "| " + utOutputHeadings.join(" | ") + " |";
      let headingLine = "|";
      for (let i = 0; i < utOutputHeadings.length; i++) headingLine += " - |";
      console.log(`${headings}\n${headingLine}`);

      let failCounter = 0;
      for (let i = 0; i < utsBattery.length; i++)
        failCounter += utFunction(i + 1, utsBattery[i]);
      console.log("\nFails:", failCounter);
    };
  };
};

module.exports = { utsFunction };
