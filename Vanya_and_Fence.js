"use strict";

function minRoadWidth(h, a) {
  let minWidth = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= h) {
      minWidth++;
    } else {
      minWidth = minWidth + 2;
    }
  }
  return minWidth;
}

const h = 7;
const a = [4, 5, 14];

console.log(minRoadWidth(h, a));
