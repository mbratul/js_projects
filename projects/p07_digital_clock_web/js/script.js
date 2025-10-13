"use strict";
function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Convert to 12-hour format
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // If 0, make it 12

  // Add leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");
  const periodEl = document.querySelector("#period");

  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  periodEl.innerHTML = period;
}
setInterval(updateClock, 1000);
