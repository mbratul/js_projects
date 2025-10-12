"use strict";
const dobInp = document.querySelector("#dob");
const calculateBtn = document.querySelector("#calculate_btn");
const displayResult = document.querySelector("#display_result");

//button event listener
calculateBtn.addEventListener("click", function () {
  const dob = new Date(dobInp.value);
  const ageInMins = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMins);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  //display the result
  displayResult.innerHTML = `You age is ${age} years`;
});
