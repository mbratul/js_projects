"use strict";
const todoInp = document.querySelector("#todo_inp");
const addBtn = document.querySelector("#add_btn");
const listContainer = document.querySelector("#list_container");

addBtn.addEventListener("click", function () {
  if (!todoInp.value) {
    alert("Enter Text first");
  } else {
    let li = document.createElement("li");
    li.innerText = todoInp.value;
    listContainer.appendChild(li);
  }
  todoInp.value = "";
  saveTask();
});

function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
