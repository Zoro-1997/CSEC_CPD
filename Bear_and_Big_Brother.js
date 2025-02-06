"use strict";
function minYearsToSurpass(a, b) {
  let numberOfYears = 0;
  while (b >= a) {
    a = a * 3;
    b = b * 2;
    numberOfYears++;
  }
  return numberOfYears;
}

console.log(minYearsToSurpass(4, 7));
