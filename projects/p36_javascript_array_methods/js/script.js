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
  //console.log(total);

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
  //console.log(arr);

  const arr1 = [...new Set(arr)];
  //console.log(arr1);

  const arr2 = arr.filter(Boolean);
  //console.log(arr2);

  const arr3 = [...new Set(arr.filter(Boolean))];
  // console.log(arr3);
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
  /**
   * for loop in an array
   */
  // console.log("***for loop***");
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
  }

  /**
   * while loop in an array
   */
  // console.log("***while loop***");
  let i = 0;
  while (i < arr.length) {
    // console.log(arr[i]);
    i++;
  }
  /**
   * forEach array method
   */
  //console.log("***forEach method***");
  arr.forEach((item, index, array) => {
    //console.log(item, index);
    //console.log(array.length);
  });
  /**
   * map array method
   */
  //console.log("***map method***");
  const mapArray = arr.map((item) => {
    const person = `Dear ${item}`;
    //console.log(person);
    return person;
  });
  //console.log(mapArray);
  // console.log(...mapArray);
  /**
   * filter array method
   */
  //console.log("***filter method***");
  const filterArray = arr.filter((item) => {
    const person = item.includes("sam");
    const length = item.length;
    //console.log(length);
    return person;
  });
  // console.log(filterArray);
}
{
  /**
   * Array updating Adding and Removing array items
   */
  const arr = ["laurence", "sam", "michel", "milton"];
  arr.push("end push");
  // console.log(arr);
  const removeFirstItem = arr.shift();
  // console.log(removeFirstItem);
  // console.log(arr);
  const removeLastItem = arr.pop();
  // console.log(removeLastItem);
  // console.log(arr);
  arr.unshift("start item");
  // console.log(arr);
  const str1 = arr.toString();
  // console.log(str1);
  const str2 = arr.join("-");
  // console.log(str2);
}
{
  /**
   * JS Map method
   */
  const arr = ["milton", 4, 457, false, 0, "", "test"];
  console.log(arr);

  const falseValue = arr.filter((item) => {
    return !item;
  });
  console.log(falseValue);
  const arr2 = [4, 45, 75, 65, 48];
  const arr3 = arr2.map((item) => {
    return item * 2;
  });
  console.log(arr3);

  const arrayObj = [
    { first: "milton", last: "jomadder" },
    { first: "saker", last: "talukder" },
  ];
  const arr7 = arrayObj.map(({ first, last }) => {
    return { fulname: `${first}, ${last}` };
  });
  console.log(arr7);
}
