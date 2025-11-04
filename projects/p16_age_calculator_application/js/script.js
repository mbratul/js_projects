"use strict";
const ageCalculatorForm = document.querySelector("#ageCalculator");

ageCalculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateAge();
});

function calculateAge() {
  const today = new Date();
  const birthDateInp = document.querySelector("#birthDate").value;
  const birthDateParts = birthDateInp.split("-");
  const birthDay = birthDateParts[0];
  const birthMonth = birthDateParts[1] - 1;
  const birthYear = birthDateParts[2];

  const birthDate = new Date(birthYear, birthMonth, birthDay);
  /**
   * helper function check it's a number or not
   * @param number
   */
  const isValidDate = (date) => {
    return (
      Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
    );
  };
  if (!isValidDate(birthDate)) {
    alert(
      "Invalid Date Format: Please Enter a valid date in: DD-MM-YYYY Format"
    );
    return;
  }

  const ageInMilliSeconds = today - birthDate;
  const ageInSeconds = Math.floor(ageInMilliSeconds / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInWeeks = Math.floor(ageInDays / 7);
  const ageInMonths = Math.floor(ageInDays / 30.436875);
  const ageInYears = Math.floor(ageInDays / 365.25);

  const resultContainer = document.querySelector("#result_container");
  const result_inner = document.querySelector("#result_inner");

  result_inner.innerHTML = `
    <div class="result_item">
      <h3>Ages :</h3>
      <p>${ageInYears}Years ${ageInMonths % 12}Months ${ageInDays % 30}Days</p>
    </div>
    <div class="result_item">
      <h3>Month Passed :</h3>
      <p>${ageInMonths} Months</p>
    </div>
    <div class="result_item">
      <h3>Weeks Passed :</h3>
      <p>${ageInWeeks} Weeks</p>
    </div>
    <div class="result_item">
      <h3>Days Passed :</h3>
      <p>${ageInDays} Days</p>
    </div>
    <div class="result_item">
      <h3>Hours Passed :</h3>
      <p>${ageInHours} Hours</p>
    </div>
    <div class="result_item">
      <h3>Minuts Passed :</h3>
      <p>${ageInMinutes} Minuts</p>
    </div>
    <div class="result_item">
      <h3>Seconds Passed :</h3>
      <p>${ageInSeconds} Seconds</p>
    </div>
  `;
  resultContainer.style.display = "block";
  console.log(birthDateInp);
}
