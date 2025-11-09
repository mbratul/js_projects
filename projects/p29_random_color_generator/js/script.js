"use strict";
const containerEL = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEL = document.createElement("div");
  colorContainerEL.classList.add("color_container");

  const colorCodeEL = document.createElement("span");
  colorCodeEL.classList.add("color_code");
  colorContainerEL.appendChild(colorCodeEL);

  const btnCopy = document.createElement("button");
  btnCopy.innerText = "Copy";
  colorContainerEL.appendChild(btnCopy);

  containerEL.appendChild(colorContainerEL);
}

function randomColors() {
  const chars = "0123456789ABCDEF";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNums = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNums, randomNums + 1);
  }
  return colorCode;
}

const colorContainerEls = document.querySelectorAll(".color_container");
function generateColor() {
  for (let i = 0; i < colorContainerEls.length; i++) {
    const colorContainerEl = colorContainerEls[i];
    const newColorCode = randomColors();
    const colorCodeEl = colorContainerEl.querySelector(".color_code");

    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorCodeEl.innerText = "#" + newColorCode;
  }
}
generateColor();

colorContainerEls.forEach((colorContainerEL) => {
  const copyButtonEl = colorContainerEL.querySelector("button");
  const colorCodeEl = colorContainerEL.querySelector(".color_code");

  copyButtonEl.addEventListener("click", function () {
    const colorCode = colorCodeEl.innerText;
    copyToClipboard(colorCode);
  });
});
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copy to Clipboard : " + text);
    })
    .catch((error) => {
      console.error("failed to copy clipboard", error);
    });
}
