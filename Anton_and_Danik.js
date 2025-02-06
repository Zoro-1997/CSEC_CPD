"use strict";

function chessWinner(n, s) {
  let A = 0;
  let D = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] == "A") {
      A++;
    } else if (s[i] == "D") {
      D++;
    }
  }
  if (A > D) {
    return "Anton";
  } else if (A < D) {
    return "Danik";
  } else {
    return "Friendship";
  }
}

const n = 6;
const s = "DDAAAD"; //Anton
console.log(chessWinner(n, s));
