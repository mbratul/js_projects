"use strict";
const checkVowelBtn = document.querySelector("#check_vowel_btn");
const resetBtn = document.querySelector("#reset_btn");
function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}

checkVowelBtn.addEventListener("click", function () {
  let textInp = document.querySelector("#textInp").value;
  const displayResult = document.querySelector("#display_result");
  let vowelCount = 0;
  //convert it to lower case
  textInp = textInp.toLowerCase();
  for (let i = 0; i < textInp.length; i++) {
    let char = textInp.charAt(i);
    if (isVowel(char)) {
      vowelCount++;
    }
  }
  displayResult.innerText = `Total Vowels : ${vowelCount}`;
});

resetBtn.addEventListener("click", function () {
  let textInp = document.querySelector("#textInp");
  const displayResult = document.querySelector("#display_result");
  textInp.value = "";
  displayResult.innerText = `Result`;
});
