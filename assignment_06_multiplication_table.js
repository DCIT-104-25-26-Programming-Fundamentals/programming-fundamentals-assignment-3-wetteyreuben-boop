const readlineSync = require("readline-sync");

function printSingleTable(number) {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${number}  x  ${i}  =  ${number * i}`);
  }
}

function printTablesUpToN(n) {
  for (let number = 1; number <= n; number++) {
    printSingleTable(number);
    console.log("---------------------------");
  }
}

function partA() {
  const number = readlineSync.questionInt("Enter a number: ");
  printSingleTable(number);
}

function partB() {
  const n = readlineSync.questionInt("Enter N: ");

  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    return;
  }

  printTablesUpToN(n);
}

function main() {
  console.log("=== PART A: Single Table ===");
  partA();

  console.log("\n=== PART B: Tables from 1 to N ===");
  partB();
}

main();