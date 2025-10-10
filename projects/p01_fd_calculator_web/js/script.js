"use strict";
function calculateMaturityAmount() {
  //get the input value
  const priniciple = parseFloat(document.querySelector("#priniciple").value);
  const interestRate = parseFloat(
    document.querySelector("#interestRate").value
  );
  const tenure = parseFloat(document.querySelector("#tenure").value);

  //perform the calculation
  const maturityAmount =
    priniciple + (priniciple * interestRate * tenure) / 100;
  //Display the Result
  const result = document.querySelector("#result");
  result.innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
}
//add event listener for button
const calculatorBtn = document.querySelector("#calculatorBtn");
calculatorBtn.addEventListener("click", calculateMaturityAmount);
