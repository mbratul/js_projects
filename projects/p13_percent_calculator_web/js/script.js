"use strict";
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

  const newValue = previousValue - currentValue;

  //percent the calculation
  const percentValue = (newValue * 100) / previousValue;
  //Display the Result

  result.innerText = `${percentValue.toFixed(2)} % : Percent `;
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
