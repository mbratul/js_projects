"use strict";
const detectBtn = document.querySelector("#detect_btn");

function detecteCharacter() {
  const characterInp = document.querySelector("#character_input");
  const displayResult = document.querySelector("#display_result");

  const character = characterInp.value;
  if (isAscii(character)) {
    displayResult.classList.add("success_message");
    displayResult.innerText = "This is an Ascii Character";
  } else {
    displayResult.innerText = "This is not an Unicode Character";
  }
}
function isAscii(character) {
  return character.charCodeAt(0) <= 127;
}
detectBtn.addEventListener("click", detecteCharacter);
