const readlineSync = require("readline-sync");

function generateFibonacci(n) {
  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  return sequence;
}

function isFibonacci(number) {
  if (number < 0) {
    return false;
  }

  let a = 0;
  let b = 1;

  if (number === a) {
    return true;
  }

  while (a <= number) {
    if (a === number) {
      return true;
    }
    const next = a + b;
    a = b;
    b = next;
  }

  return false;
}

function partA() {
  const n = readlineSync.questionInt("How many terms? ");

  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    return;
  }

  const sequence = generateFibonacci(n);
  console.log(`Fibonacci sequence: ${sequence.join(" ")}`);
}

function partB() {
  const number = readlineSync.questionInt("Enter a number to check: ");

  if (isFibonacci(number)) {
    console.log(`${number} is a Fibonacci number.`);
  } else {
    console.log(`${number} is NOT a Fibonacci number.`);
  }
}

function main() {
  console.log("=== PART A: First N Terms ===");
  partA();

  console.log("\n=== PART B: Check if a Number is Fibonacci ===");
  partB();
}

main();