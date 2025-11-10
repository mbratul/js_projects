"use strict";
function calculateLoanAmount() {
  const loanAmount = parseFloat(document.querySelector("#loan_amount").value);
  const interestRate = parseFloat(
    document.querySelector("#interest_rate").value
  );
  const loanTerm = parseFloat(document.querySelector("#loan_term").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    showError("Please Enter Valid Numbers for all Fields");
    return;
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayment = loanTerm;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -totalPayment));
  const totalInterest = monthlyPayment * totalPayment - loanAmount;

  displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
  const result = document.querySelector("#result");
  result.innerHTML = `
  <p><strong>Monthly Payment : ${monthlyPayment.toFixed(2)} </strong></p>
  <p><strong>Total Interest : ${totalInterest.toFixed(2)} </strong></p>
  `;
}
function showError(message) {
  const result = document.querySelector("#result");
  result.innerHTML = `
  <p class="error">${message}</p>
  
  `;
}
document
  .querySelector("#calculator_btn")
  .addEventListener("click", calculateLoanAmount);
