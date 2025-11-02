"use strict";
const passBoxInp = document.querySelector("#pass_box");
const copyIcon = document.querySelector("#copyIcon");
const inputSlider = document.querySelector("#input_slider");
const sliderValue = document.querySelector("#slider_value");
const lowercaseEl = document.querySelector("#lowercase");
const uppercaseEl = document.querySelector("#uppercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const generateBtn = document.querySelector("#getBtn");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", function () {
  sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener("click", function () {
  passBoxInp.value = generatePassword();
});

function generatePassword() {
  const length = inputSlider.value;
  let character = "";
  let password = "";

  character += lowercaseEl.checked ? lowercaseLetters : "";
  character += uppercaseEl.checked ? uppercaseLetters : "";
  character += numbersEl.checked ? numbers : "";
  character += symbolsEl.checked ? symbols : "";

  for (let i = 0; i < length; i++) {
    password += character.charAt(Math.floor(Math.random() * character.length));
    //console.log(password);
  }
  return password;
}

copyIcon.addEventListener("click", function () {
  if (passBoxInp.value != "" || passBoxInp.value.length >= 10) {
    navigator.clipboard.writeText(passBoxInp.value);
    copyIcon.innerText = "check";
  }
  setTimeout(function () {
    copyIcon.innerHTML = "content_copy";
  }, 3000);
});
