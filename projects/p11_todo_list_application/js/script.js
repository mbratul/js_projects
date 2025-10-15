"use strict";
const todoInp = document.querySelector("#todo_inp");
const addBtn = document.querySelector("#add_btn");
const listContainer = document.querySelector("#list_container");

addBtn.addEventListener("click", function () {
  if (!todoInp.value) {
    alert("Enter Text first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoInp.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  todoInp.value = "";
  saveTask();
});

listContainer.addEventListener("click", function (e) {
  //console.log(e);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});
/**
 * save data to local storage
 *
 */
function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}
/**
 * display data from local storage
 *
 */
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
