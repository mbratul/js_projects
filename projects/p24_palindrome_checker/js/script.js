"use strict";
const btnCheck = document.querySelector("#btnCheck");

function isPalindrom(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}
btnCheck.addEventListener("click", function () {
  const inputBox = document.querySelector("#input_box");
  const inputBoxInp = inputBox.value;
  const result = document.querySelector("#result");
  if (isPalindrom(inputBoxInp)) {
    result.textContent = `"${inputBoxInp}" is a Palindrome`;
  } else {
    result.textContent = `"${inputBoxInp}" is not a Palindrome`;
  }
  inputBox.value = "";
});
