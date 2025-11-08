"use strict";
const counterDisplay = document.querySelector("#counter_display");
const btnIncrement = document.querySelector("#increment_button");
const btnDecrement = document.querySelector("#decrement_button");
const btnReset = document.querySelector("#btnReset");

let counterValue = 0;

function updateCounterDisplay() {
  counterDisplay.textContent = counterValue;
}

btnIncrement.addEventListener("click", function () {
  counterValue++;
  updateCounterDisplay();
});
btnDecrement.addEventListener("click", function () {
  if (counterValue > 0) {
    counterValue--;
    updateCounterDisplay();
  }
});
btnReset.addEventListener("click", function () {
  counterValue = 0;
  updateCounterDisplay();
});
