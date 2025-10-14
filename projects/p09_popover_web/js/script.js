"use strict";
const clickBtn = document.querySelector("#click_btn");
const popOver = document.querySelector("#pop_over");
const closeBtn = document.querySelector("#close_btn");

clickBtn.addEventListener("click", function () {
  popOver.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  popOver.classList.remove("active");
});
