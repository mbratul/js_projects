"use strict";
const bmiForm = document.querySelector("#bmiForm");

bmiForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const gender = document.querySelector("#gender").value;
  const age = parseInt(document.querySelector("#age").value);
  const height_feet = parseInt(document.querySelector("#height_feet").value);
  const height_inch = parseInt(document.querySelector("#height_inch").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  if (gender && age && height_feet && height_inch && weight) {
    const height = (height_feet * 12 + height_inch) * 0.0254;
    const bmi = weight / (height * height);
    const result = document.querySelector("#result");

    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Over Weight";
    } else {
      category = "Obess";
    }
    let resultMessage = "Your BMI : " + bmi.toFixed(2) + "</br>";
    resultMessage += "Category : " + category;

    result.innerHTML = resultMessage;
  }
});
