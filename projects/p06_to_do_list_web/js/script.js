"use strict";
const todoInput = document.querySelector("#todoInput");
const todoBtn = document.querySelector("#todoBtn");
const todoList = document.querySelector("#todoList");
const error_message = document.querySelector("#error_message");

todoBtn.addEventListener("click", function () {
  const todoText = todoInput.value;

  if (!todoText) {
    error_message.classList.add("error_message");
    error_message.innerText = "Please Write your to do list";
  } else {
    const todoLilstItem = document.createElement("li");
    todoLilstItem.innerText = todoText;

    const deletetodoBtn = document.createElement("button");
    deletetodoBtn.innerText = "X";
    deletetodoBtn.classList.add("delete_btn");

    deletetodoBtn.addEventListener("click", function () {
      todoLilstItem.remove();
    });

    //add delete button to the list item
    todoLilstItem.appendChild(deletetodoBtn);

    //add list item to the ul
    todoList.appendChild(todoLilstItem);
    todoInput.value = "";
  }
});
