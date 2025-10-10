"use strict";
const priniciple = document.querySelector("#priniciple");
const interestRate = document.querySelector("#interestRate");
const tenure = document.querySelector("#tenure");
const calculatorBtn = document.querySelector("#calculatorBtn");
const resetBtn = document.querySelector("#resetBtn");
const result = document.querySelector("#result");

//FD Calculator handler function
function handlecalculateMaturityAmount() {
  //get the input value
  const prinicipleValue = parseFloat(priniciple.value);
  const interestRateValue = parseFloat(interestRate.value);
  const tenureValue = parseFloat(tenure.value);

  //perform the calculation
  const maturityAmount =
    prinicipleValue + (prinicipleValue * interestRateValue * tenureValue) / 100;
  //Display the Result

  result.innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
}
//add event listener for button

calculatorBtn.addEventListener("click", handlecalculateMaturityAmount);
// reset button event listener

resetBtn.addEventListener("click", function () {
  priniciple.value = "";
  interestRate.value = "";
  tenure.value = "";
  result.innerText = "Maturity Amount";
});
