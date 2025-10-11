"use strict";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

const passwordInp = document.querySelector("#password_inp");
const generatorBtn = document.querySelector("#generator_btn");
const copybtn = document.querySelector("#copy_btn");
const lengthEl = document.querySelector("#length");
const lowercaseCk = document.querySelector("#lowercase");
const uppercaseCk = document.querySelector("#uppercase");
const numbersCk = document.querySelector("#numbers");
const symbolsCk = document.querySelector("#symbols");

//generate button event listener
generatorBtn.addEventListener("click", function () {
  const length = lengthEl.value;
  let character = "";
  let password = "";

  if (lowercaseCk.checked) {
    character += lowercaseLetters;
  }
  if (uppercaseCk.checked) {
    character += uppercaseLetters;
  }
  if (numbersCk.checked) {
    character += numbers;
  }
  if (symbolsCk.checked) {
    character += symbols;
  }
  for (let i = 0; i < length; i++) {
    password += character.charAt(Math.floor(Math.random() * character.length));
  }
  passwordInp.value = password;
});

copybtn.addEventListener("click", function () {
  if (!passwordInp.value) {
    alert("Generate a Password");
  } else {
    navigator.clipboard.writeText(passwordInp.value);
    alert("password copied");
  }
});
