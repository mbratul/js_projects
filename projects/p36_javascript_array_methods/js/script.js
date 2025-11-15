"use strict";
{
  /**
   * filter number and sum of total value
   * @param {number}
   * @returns {number}
   */
  const numbers = [20, 15, 45, 56, 45, 75];

  const total = numbers
    .filter(function (number) {
      return number >= 50;
    })
    .reduce(function (total, number) {
      return total + number;
    }, 0);
  console.log(total);

  /**
   * clean up array and filter the array with Set operator
   */

  const arr = [
    "laurence",
    "sam",
    "michel",
    null,
    ,
    "milton",
    0,
    ,
    "laurence",
    "sam",
    "michel",
    false,
    ,
    "milton",
    undefined,
    ,
  ];
  console.log(arr);

  const arr1 = [...new Set(arr)];
  console.log(arr1);

  const arr2 = arr.filter(Boolean);
  console.log(arr2);

  const arr3 = [...new Set(arr.filter(Boolean))];
  console.log(arr3);
}
{
  /**
   * how to loop through an array
   */
  const arr = [
    "laurence",
    "sam",
    "michel",
    "milton",
    "laurence",
    "sam",
    "michel",
    "milton",
  ];
}
