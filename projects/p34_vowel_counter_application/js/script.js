"use strict";
const textBox = document.querySelector("#textBox");
const countBtn = document.querySelector("#countBtn");
const displayResult = document.querySelector("#display_result");

function checkVowels() {
  let text = textBox.value;
  let vowelcount = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    if (isVowel(char)) {
      vowelcount++;
    }
  }
  displayResult.textContent = `Total Vowels : ${vowelcount}`;
}

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}
countBtn.addEventListener("click", checkVowels);
