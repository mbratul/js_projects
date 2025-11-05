"use strict";

const inputText = document.querySelector("#inputText");
const btnCountVowels = document.querySelector("#count_vowels");
const displayResult = document.querySelector("#display_result");

function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}

btnCountVowels.addEventListener("click", function () {
  let text = inputText.value;
  text = text.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    if (isVowel(char)) {
      vowelCount++;
    }
  }
  displayResult.textContent = `Total Vowels : ${vowelCount}`;
});
