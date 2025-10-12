"use strict";

const calculateBtn = document.querySelector("#calculate_btn");
const displayTip = document.querySelector("#display_tip");
const displayBill = document.querySelector("#display_bill");
const errorMessage = document.querySelector("#error_message");

calculateBtn.addEventListener("click", function () {
  const billAmountInp = parseFloat(
    document.querySelector("#bill_amount").value
  );
  const tipPercentInp = parseFloat(
    document.querySelector("#tip_percent").value
  );

  if (!billAmountInp && !tipPercentInp) {
    errorMessage.classList.add("error_message");
    errorMessage.innerText = "Please Enter Amount";
  } else {
    const tipAmount = billAmountInp * (tipPercentInp / 100);
    const totalAmount = billAmountInp + tipAmount;

    displayTip.innerText = `$${tipAmount.toFixed(2)}`;
    displayBill.innerText = `$${totalAmount.toFixed(2)}`;
  }
});
