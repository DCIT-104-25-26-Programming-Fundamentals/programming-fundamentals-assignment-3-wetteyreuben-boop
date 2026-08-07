const readlineSync = require("readline-sync");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function modulus(a, b) {
  if (b === 0) {
    return null;
  }
  return a % b;
}

function exponentiate(a, b) {
  return a ** b;
}

function showMenu() {
  console.log("\n============================");
  console.log("     SIMPLE CALCULATOR");
  console.log("============================");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Modulus");
  console.log("6. Exponentiation");
  console.log("7. Quit");
}

function getTwoNumbers() {
  const first = readlineSync.questionInt("Enter first number : ");
  const second = readlineSync.questionInt("Enter second number: ");
  return { first, second };
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt("Select an operation (1-7): ");

    if (choice === 1) {
      const { first, second } = getTwoNumbers();
      const result = add(first, second);
      console.log(`Result: ${first} + ${second} = ${result.toFixed(2)}`);
    } else if (choice === 2) {
      const { first, second } = getTwoNumbers();
      const result = subtract(first, second);
      console.log(`Result: ${first} - ${second} = ${result.toFixed(2)}`);
    } else if (choice === 3) {
      const { first, second } = getTwoNumbers();
      const result = multiply(first, second);
      console.log(`Result: ${first} * ${second} = ${result.toFixed(2)}`);
    } else if (choice === 4) {
      const { first, second } = getTwoNumbers();
      const result = divide(first, second);
      if (result === null) {
        console.log("Error: Cannot divide by zero.");
      } else {
        console.log(`Result: ${first} / ${second} = ${result.toFixed(2)}`);
      }
    } else if (choice === 5) {
      const { first, second } = getTwoNumbers();
      const result = modulus(first, second);
      if (result === null) {
        console.log("Error: Cannot divide by zero.");
      } else {
        console.log(`Result: ${first} % ${second} = ${result.toFixed(2)}`);
      }
    } else if (choice === 6) {
      const { first, second } = getTwoNumbers();
      const result = exponentiate(first, second);
      console.log(`Result: ${first} ** ${second} = ${result.toFixed(2)}`);
    } else if (choice === 7) {
      console.log("Goodbye!");
      running = false;
    } else {
      console.log("Error: Invalid choice. Please enter a number between 1 and 7.");
    }
  }
}

main();