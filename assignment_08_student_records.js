const readlineSync = require("readline-sync");

let students = [];

function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function addStudent() {
  const name = readlineSync.question("Student name: ");
  const id = readlineSync.questionInt("Student ID: ");
  const scoreCount = readlineSync.questionInt("How many scores? ");

  const scores = [];
  for (let i = 0; i < scoreCount; i++) {
    const score = readlineSync.questionInt(`Enter score ${i + 1}: `);
    scores.push(score);
  }

  const student = { name, id, scores };
  students.push(student);

  console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents() {
  if (students.length === 0) {
    console.log("No students have been added yet.");
    return;
  }

  console.log("\nName                 ID           Scores               Average");
  console.log("-------------------------------------------------------------------");

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student.scores);

    console.log(
      `${student.name.padEnd(20, ' ')} ${student.id.toString().padEnd(12, ' ')} ${student.scores.join(', ').padEnd(20, ' ')} ${average.toFixed(2)}`
    );
  }
}

function findStudentAverage() {
  const id = readlineSync.questionInt("Enter student ID: ");

  let foundStudent = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      foundStudent = students[i];
      break;
    }
  }

  if (foundStudent === null) {
    console.log("Error: Student ID not found.");
    return;
  }

  const average = calculateAverage(foundStudent.scores);
  console.log(`${foundStudent.name}'s average score: ${average.toFixed(2)}`);
}

function showMenu() {
  console.log("\n================================");
  console.log("   STUDENT RECORD SYSTEM MENU");
  console.log("================================");
  console.log("1. Add student");
  console.log("2. Display all students");
  console.log("3. Calculate average score");
  console.log("4. Quit");
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt("Enter your choice (1-4): ");

    if (choice === 1) {
      addStudent();
    } else if (choice === 2) {
      displayAllStudents();
    } else if (choice === 3) {
      findStudentAverage();
    } else if (choice === 4) {
      console.log("Goodbye!");
      running = false;
    } else {
      console.log("Error: Invalid choice. Please enter a number between 1 and 4.");
    }
  }
}

main();