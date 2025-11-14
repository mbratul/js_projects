"use strict";
const numbers = [20, 15, 45, 56, 45, 75];

const total = numbers
  .filter(function (number) {
    return number >= 50;
  })
  .reduce(function (total, number) {
    return total + number;
  }, 0);
console.log(total);

const arr = [
  "laurence",
  "sam",
  "michel",
  ,
  ,
  "milton",
  ,
  ,
  "laurence",
  "sam",
  "michel",
  ,
  ,
  "milton",
  ,
  ,
];
console.log(arr);
