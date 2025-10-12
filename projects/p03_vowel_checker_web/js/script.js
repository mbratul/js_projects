"use strict";
const checkVowelsBn = document.querySelector("#check_vowels_btn");
const resetBn = document.querySelector("#reset_btn");

function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}

checkVowelsBn.addEventListener("click", function () {
  let inputText = document.querySelector("#inputText").value;
  let vowelCount = 0;

  //convert it into lowercase
  inputText = inputText.toLowerCase();
  for (let i = 0; i < inputText.length; i++) {
    var char = inputText.charAt(i);
    if (isVowel(char)) {
      vowelCount++;
    }
  }
  let display_resul = document.querySelector("#display_resul");
  display_resul.innerText = `Total Vowels: ${vowelCount}`;
});

resetBn.addEventListener("click", function () {
  let inputText = document.querySelector("#inputText");
  inputText.value = " ";
  let display_resul = document.querySelector("#display_resul");
  display_resul.innerText = `Result`;
});
