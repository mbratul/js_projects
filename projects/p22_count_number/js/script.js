"use strict";
const colorText = document.querySelector("#color_text");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
let count = 0;
function handelIncrement() {
  count++;
  colorText.textContent = count;
}
function handleDecrement() {
  count--;
  colorText.textContent = count;
}
//increment(2);
//decrement(5);

incrementBtn.addEventListener("click", handelIncrement);
decrementBtn.addEventListener("click", handleDecrement);
