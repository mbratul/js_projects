"use strict";
const inputBox = document.querySelector("#input_box");
const btnAdd = document.querySelector("#btn_add");
const tasklist = document.querySelector("#tasklist ul");

btnAdd.addEventListener("click", function () {
  let inputValue = inputBox.value;
  if (inputValue === "") {
    alert("Please Enter your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputValue;
    tasklist.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
  }
  saveData();
});

tasklist.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", tasklist.innerHTML);
}
function showTask() {
  tasklist.innerHTML = localStorage.getItem("data");
}
showTask();
