"use strict";
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");
calculate.addEventListener("click", function () {
  const name1 = document.querySelector("#name1").value.trim();
  const name2 = document.querySelector("#name2").value.trim();

  if (name1 === " " || name2 === "") {
    alert("Please Enter both name");
  }
  const lovePercent = Math.floor(Math.random() * 101);
  if (lovePercent < 30) {
    result.innerHTML += `</br> Not a great match`;
  } else if (lovePercent >= 30 && lovePercent < 70) {
    result.innerHTML += `</br> There is a potential give it a try`;
  } else {
    result.innerHTML += `</br> Great Match`;
  }

  result.innerHTML = `${name1} and ${name2} 's Love Percentage ${lovePercent}%`;
});
reset.addEventListener("click", function () {
  const name1 = document.querySelector("#name1");
  const name2 = document.querySelector("#name2");

  name1.value = "";
  name2.value = "";
  result.innerHTML = "";
});
