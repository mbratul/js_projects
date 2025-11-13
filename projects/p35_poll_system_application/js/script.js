"use strict";
const btnSubmit = document.querySelector("#btn_submit");
const options = [
  { id: "option1", text: "JavaScript", votes: 0 },
  { id: "option2", text: "PHP", votes: 0 },
  { id: "option3", text: "Java", votes: 0 },
  { id: "option4", text: "Python", votes: 0 },
];
btnSubmit.addEventListener("click", function () {
  const selectedOption = document.querySelector('input[name="poll"]:checked');

  if (!selectedOption) {
    alert("Please Select an option");
    return;
  }

  const optionID = selectedOption.value;
  const selectedOptionObj = options.find((option) => option.id === optionID);
  if (selectedOptionObj) {
    selectedOptionObj.votes++;
    displayResult();
  }
});

function displayResult() {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  options.forEach((option) => {
    const percentage = ((option.votes / getTotalVotes()) * 100).toFixed(2) || 0;
    const barWidth = percentage > 0 ? percentage + "%" : "0%";
    const optionsResult = document.createElement("div");
    optionsResult.className = "option_result";
    optionsResult.innerHTML = `
    <span class="option_text">${option.text} </span>
    <div class="bar_container">
    <div class="bar" style="width:${barWidth};"></div>
    </div>
    <span class="percentage">${percentage} %</span>
    `;
    result.appendChild(optionsResult);
  });
}

function getTotalVotes() {
  return options.reduce(function (total, option) {
    return total + option.votes;
  }, 0);
}

displayResult();
