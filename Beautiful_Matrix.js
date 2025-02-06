"use strict";

function minMovesToBeautiful(matrix) {
  let x, y;

  // Find the position of '1'
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === 1) {
        x = i + 1; // Convert to 1-based index
        y = j + 1;
        break;
      }
    }
  }

  // Calculate the minimum moves required
  return Math.abs(x - 3) + Math.abs(y - 3);
}

const matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];

console.log(minMovesToBeautiful(matrix));
