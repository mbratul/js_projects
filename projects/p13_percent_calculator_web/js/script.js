"use strict";
{
  const previous = document.querySelector("#previous");
  const current = document.querySelector("#current");
  const tenure = document.querySelector("#tenure");
  const calculatorBtn = document.querySelector("#calculatorBtn");
  const resetBtn = document.querySelector("#resetBtn");
  const result = document.querySelector("#result");

  //FD Calculator handler function
  function handlecalculateMaturityAmount() {
    //get the input value
    const previousValue = parseFloat(previous.value);
    const currentValue = parseFloat(current.value);
    //const tenureValue = parseFloat(tenure.value);

    const absoluteValue = previousValue - currentValue;
    //percent the calculation
    const percentValue = (absoluteValue * 100) / previousValue;
    //Display the Result
    if (previousValue < currentValue) {
      result.innerText = `${Math.abs(
        percentValue.toFixed(2)
      )}% Percent Increase`;
    } else {
      result.innerText = `${Math.abs(
        percentValue.toFixed(2)
      )}% Percent Decrease`;
    }
  }
  //add event listener for button

  calculatorBtn.addEventListener("click", handlecalculateMaturityAmount);
  // reset button event listener

  resetBtn.addEventListener("click", function () {
    previous.value = "";
    current.value = "";
    //tenure.value = "";
    result.innerText = "Show Result";
  });
}

{
  const currentSalary = document.querySelector("#current_salary");
  const percentNumber = document.querySelector("#percent_number");
  const calculatorBtn = document.querySelector("#salary_calculatorBtn");
  const resetBtn = document.querySelector("#reset_Salary_Btn");
  const resultNew = document.querySelector("#result_new");
  const resultTotal = document.querySelector("#result_total");

  //FD Calculator handler function
  function handleSalaryInPercent() {
    //get the input value
    const currentSalaryValue = parseFloat(currentSalary.value);
    const percentNumberValue = parseFloat(percentNumber.value);
    //const tenureValue = parseFloat(tenure.value);

    const absoluteValue = (currentSalaryValue / 100) * percentNumberValue;
    //percent the calculation
    const totalValue = absoluteValue + currentSalaryValue;
    //Display the Result
    resultNew.innerText = `New Amount $${Math.abs(absoluteValue.toFixed(2))}`;
    resultTotal.innerText = `Total Salary $${Math.abs(totalValue.toFixed(2))}`;
  }
  //add event listener for button

  calculatorBtn.addEventListener("click", handleSalaryInPercent);
  // reset button event listener

  resetBtn.addEventListener("click", function () {
    currentSalary.value = "";
    percentNumber.value = "";
    resultNew.innerText = "New Amount";
    resultTotal.innerText = "Total Amount";
  });
}
