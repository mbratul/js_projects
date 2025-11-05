"use strict";
const generateBtn = document.querySelector("#generateBtn");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function updateColor() {
  const colorBox = document.querySelector("#color_box");
  const colorText = document.querySelector("#color_text");

  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}
generateBtn.addEventListener("click", updateColor);
