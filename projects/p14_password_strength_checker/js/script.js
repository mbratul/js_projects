"use strict";
const passwordInp = document.querySelector("#password_inp");
const submitBtn = document.querySelector("#submit_btn");
const message = document.querySelector("#message");
const strength = document.querySelector("#strength");

passwordInp.addEventListener("input", function () {
  const passwordValue = passwordInp.value;
  const passwordLength = passwordValue.length;

  let strengthValue = " ";

  if (passwordInp === 0) {
    strengthValue = "";
  } else if (passwordLength < 6) {
    strengthValue = "Weak";
  } else if (passwordLength < 8) {
    strengthValue = "Medium";
  } else {
    strengthValue = "Strong";
  }
  strength.textContent = strengthValue;
  //Display the message
  message.style.display = "block";
});

submitBtn.addEventListener("click", function () {
  const passwordType = passwordInp.getAttribute("type");
  if (passwordType === "password") {
    passwordInp.setAttribute("type", "text");
  } else {
    passwordInp.setAttribute("type", "password");
  }
});
