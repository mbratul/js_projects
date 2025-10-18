"use strict";

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Validates if input values are valid numbers
 * @param {...number} values - Numbers to validate
 * @returns {boolean} - True if all values are valid
 */
function validateInputs(...values) {
  return values.every(
    (value) => !isNaN(value) && value !== null && value !== ""
  );
}

/**
 * Formats number to fixed decimal places
 * @param {number} num - Number to format
 * @param {number} decimals - Decimal places (default: 2)
 * @returns {string} - Formatted number
 */
function formatNumber(num, decimals = 2) {
  return Math.abs(num).toFixed(decimals);
}

/**
 * Clears input fields and resets result display
 * @param {Object} elements - Object containing input and result elements
 */
function resetCalculator(elements) {
  Object.keys(elements).forEach((key) => {
    if (elements[key].tagName === "INPUT") {
      elements[key].value = "";
    } else {
      elements[key].textContent =
        elements[key].dataset.defaultText || "Show Result";
    }
  });
}

// ============================================
// PERCENTAGE CHANGE CALCULATOR
// ============================================

function initPercentageChangeCalculator() {
  // DOM Elements
  const elements = {
    previous: document.querySelector("#previous"),
    current: document.querySelector("#current"),
    calculatorBtn: document.querySelector("#calculatorBtn"),
    resetBtn: document.querySelector("#resetBtn"),
    result: document.querySelector("#result"),
  };

  // Store default text for reset
  elements.result.dataset.defaultText = "Show Result";

  /**
   * Calculates percentage change between two values
   */
  function calculatePercentageChange() {
    const previousValue = parseFloat(elements.previous.value);
    const currentValue = parseFloat(elements.current.value);

    // Validate inputs
    if (!validateInputs(previousValue, currentValue)) {
      elements.result.textContent = "Please enter valid numbers";
      return;
    }

    if (previousValue === 0) {
      elements.result.textContent = "Previous value cannot be zero";
      return;
    }

    // Calculate percentage change
    const difference = currentValue - previousValue;
    const percentChange = (difference / previousValue) * 100;

    // Determine increase or decrease
    const changeType = percentChange >= 0 ? "Increase" : "Decrease";

    // Display result
    elements.result.textContent = `${formatNumber(
      percentChange
    )}% Percent ${changeType}`;
  }

  /**
   * Resets the calculator
   */
  function resetCalculator() {
    elements.previous.value = "";
    elements.current.value = "";
    elements.result.textContent = elements.result.dataset.defaultText;
  }

  // Event Listeners
  elements.calculatorBtn.addEventListener("click", calculatePercentageChange);
  elements.resetBtn.addEventListener("click", resetCalculator);
}

// ============================================
// SALARY CALCULATOR
// ============================================

function initSalaryCalculator() {
  // DOM Elements
  const elements = {
    currentSalary: document.querySelector("#current_salary"),
    percentNumber: document.querySelector("#percent_number"),
    calculatorBtn: document.querySelector("#salary_calculatorBtn"),
    resetBtn: document.querySelector("#reset_Salary_Btn"),
    resultNew: document.querySelector("#result_new"),
    resultTotal: document.querySelector("#result_total"),
  };

  // Store default texts
  elements.resultNew.dataset.defaultText = "New Amount";
  elements.resultTotal.dataset.defaultText = "Total Amount";

  /**
   * Calculates new salary based on percentage increase
   */
  function calculateSalaryIncrease() {
    const currentSalaryValue = parseFloat(elements.currentSalary.value);
    const percentNumberValue = parseFloat(elements.percentNumber.value);

    // Validate inputs
    if (!validateInputs(currentSalaryValue, percentNumberValue)) {
      elements.resultNew.textContent = "Please enter valid numbers";
      elements.resultTotal.textContent = "";
      return;
    }

    if (currentSalaryValue <= 0) {
      elements.resultNew.textContent = "Salary must be greater than zero";
      elements.resultTotal.textContent = "";
      return;
    }

    // Calculate increase and total
    const increaseAmount = (currentSalaryValue * percentNumberValue) / 100;
    const totalSalary = currentSalaryValue + increaseAmount;

    // Display results
    elements.resultNew.textContent = `New Amount: $${formatNumber(
      increaseAmount
    )}`;
    elements.resultTotal.textContent = `Total Salary: $${formatNumber(
      totalSalary
    )}`;
  }

  /**
   * Resets the salary calculator
   */
  function resetCalculator() {
    elements.currentSalary.value = "";
    elements.percentNumber.value = "";
    elements.resultNew.textContent = elements.resultNew.dataset.defaultText;
    elements.resultTotal.textContent = elements.resultTotal.dataset.defaultText;
  }

  // Event Listeners
  elements.calculatorBtn.addEventListener("click", calculateSalaryIncrease);
  elements.resetBtn.addEventListener("click", resetCalculator);
}

// ============================================
// INITIALIZE ALL CALCULATORS
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initPercentageChangeCalculator();
  initSalaryCalculator();
});
