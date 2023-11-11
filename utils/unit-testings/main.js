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
    
      const headings = `| Number | Status | ${utOutputHeadings.join(" | ")} |`;
      let headingLine = "| - | - |";
      for (let i = 0; i < utOutputHeadings.length; i++) headingLine += " - |";
      console.log(`${headings}\n${headingLine}`);

      let failCounter = 0;
      for (let i = 0; i < utsBattery.length; i++) {
        const { status, message } = utFunction(utsBattery[i]);

        const statusLog = status ? "Pass" : "Fail";

        console.log(`| ${i + 1} | ${statusLog} | ${message} |`);

        // Because of "!", True = 0 & False = 1;
        failCounter += !status;
      };
      console.log("\nFails:", failCounter);
    };
  };
};

module.exports = { utsFunction };
