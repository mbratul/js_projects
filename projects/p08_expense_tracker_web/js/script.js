"use strict";
const expenseBtn = document.querySelector("#btn_expense");
const expanseList = document.querySelector("#expanse_list");
const totaltAmount = document.querySelector("#totalt_amount");

let expenses = [];
let total = 0;

function renderExpenses() {
  let html = "";
  expenses.forEach((expense) => {
    html += `
        <div class="expense_item">
        <div class="expense_item_description">${expense.description}</div>
        <div class="expense_item_amount">$${expense.amount}</div>
        <button class="expense_delete_btn">&times;</button>
        </div>
    `;
  });
  expanseList.innerHTML = html;
  totaltAmount.innerText = `$${total}`;
}
function addExpenses() {
  const description = prompt("Enter Expense Description");
  const amount = parseFloat(prompt("Enter the amount"));

  if (description && amount) {
    const expense = {
      description: description,
      amount: amount,
    };
    expenses.push(expense);
    total += amount;
    renderExpenses();
  }
}
expenseBtn.addEventListener("click", addExpenses);

function deleteExpense(index) {
  total -= expenses[index].amount;
  expenses.splice(index, 1);
  renderExpenses();
}

expanseList.addEventListener("click", function (event) {
  if ((event.target.classList = "expense_delete_btn")) {
    const index = Array.from(
      event.target.parentNode.parentNode.children
    ).indexOf(event.target.parentNode);
    deleteExpense(index);
  }
});
