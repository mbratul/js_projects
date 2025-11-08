"use strict";
const characterInputInp = document.querySelector("#character_input");
const btnCheck = document.querySelector("#btnCheck");
const displayResult = document.querySelector("#display_result");

function isAscii(character) {
  return character.charCodeAt(0) <= 127;
}

btnCheck.addEventListener("click", function () {
  const character = characterInputInp.value;
  if (isAscii(character)) {
    displayResult.innerText = "It's an ASCII Character";
  } else {
    displayResult.innerText = "It's an Unicode Character";
  }
});
