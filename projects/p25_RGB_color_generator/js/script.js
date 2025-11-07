"use strict";
const colorBox = document.querySelector("#color_box");
const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");
const redValueSpan = document.querySelector("#redValue");
const greenValueSpan = document.querySelector("#greenValue");
const blueValueSpan = document.querySelector("#blueValue");
const copyButton = document.querySelector("#copy_button");
const inputTypeValue = document.querySelector("#input_type_value");

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  colorBox.style.backgroundColor = rgbColor;

  redValueSpan.textContent = redValue;
  greenValueSpan.textContent = greenValue;
  blueValueSpan.textContent = blueValue;

  inputTypeValue.textContent = rgbColor;
}
updateColor();

function copyRGBValue() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

  navigator.clipboard
    .writeText(rgbColor)
    .then(() => {
      alert("RGB Color value copied to clipboard", rgbColor);
    })
    .catch((error) => {
      console.error("Failed to Copy RGB Value", error);
    });
}
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
copyButton.addEventListener("input", copyRGBValue);
