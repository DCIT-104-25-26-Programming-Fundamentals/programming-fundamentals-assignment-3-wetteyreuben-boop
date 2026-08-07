const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label) {
  const matrix = [];
  console.log(`\nEnter ${label} (${rows} x ${cols}):`);
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const row = line.trim().split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix, title) {
  console.log(`\n${title}`);
  for (let i = 0; i < matrix.length; i++) {
    let rowText = '';
    for (let j = 0; j < matrix[i].length; j++) {
      rowText += matrix[i][j].toString().padStart(5, ' ');
    }
    console.log(rowText);
  }
}

function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

function multiplyMatrices(a, b) {
  const rowsA = a.length;
  const colsA = a[0].length;
  const colsB = b[0].length;
  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

function main() {
  console.log('=== PART A: Transpose a Matrix ===');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');
  const matrixA = readMatrix(rowsA, colsA, 'Matrix');

  printMatrix(matrixA, 'Original Matrix:');
  const transposed = transpose(matrixA);
  printMatrix(transposed, 'Transposed Matrix:');

  console.log('\n=== PART B: Add Two Matrices ===');
  console.log(`Both matrices must be ${rowsA} x ${colsA}.`);
  const matrixB1 = readMatrix(rowsA, colsA, 'Matrix 1');
  const matrixB2 = readMatrix(rowsA, colsA, 'Matrix 2');

  printMatrix(matrixB1, 'Matrix 1:');
  printMatrix(matrixB2, 'Matrix 2:');
  const sumMatrix = addMatrices(matrixB1, matrixB2);
  printMatrix(sumMatrix, 'Sum Matrix:');

  console.log('\n=== PART C: Multiply Two Matrices ===');
  const rowsC1 = readlineSync.questionInt('Enter number of rows for Matrix A: ');
  const colsC1 = readlineSync.questionInt('Enter number of columns for Matrix A: ');
  const matrixC1 = readMatrix(rowsC1, colsC1, 'Matrix A');

  console.log(`\nMatrix B must have ${colsC1} rows (to match Matrix A's columns).`);
  const rowsC2 = colsC1;
  const colsC2 = readlineSync.questionInt('Enter number of columns for Matrix B: ');
  const matrixC2 = readMatrix(rowsC2, colsC2, 'Matrix B');

  printMatrix(matrixC1, 'Matrix A:');
  printMatrix(matrixC2, 'Matrix B:');
  const productMatrix = multiplyMatrices(matrixC1, matrixC2);
  printMatrix(productMatrix, 'Product Matrix (A x B):');
}

main();