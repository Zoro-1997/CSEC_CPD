"use strict";

function countSureProblems(n, problems) {
  let implement = 0;

  for (let i = 0; i < n; i++) {
    let vote = 0;
    for (let j = 0; j < 3; j++) {
      problems[i][j] == 1 ? vote++ : null;
    }
    vote >= 2 ? implement++ : null;
  }
  return implement;
}

const n = 3;
const problems = [
  [1, 1, 0], // Problem 1
  [1, 1, 1], // Problem 2
  [1, 0, 0], // Problem 3
];
//o/p: 2
console.log(countSureProblems(n, problems));
