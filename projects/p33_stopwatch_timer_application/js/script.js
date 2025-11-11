"use strict";
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");

const statBtn = document.querySelector("#statBtn");
const stopBtn = document.querySelector("#stopBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

const lapList = document.querySelector("#lapList");

//Stop Watch Variable
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;

statBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(updateTimer, 10);
  statBtn.disabled = true;
}

function stopTimer() {
  clearInterval(interval);
  addLapList();
  resetTimerHelper();
  statBtn.disabled = false;
}
function pauseTimer() {
  clearInterval(interval);
  //   pauseBtn.disabled = true;
  statBtn.disabled = false;
}
function resetTimer() {
  clearInterval(interval);
  resetTimerHelper();
  statBtn.disabled = false;
}
function updateTimer() {
  miliseconds++;
  if (miliseconds === 1000) {
    miliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTimer();
}
function displayTimer() {
  milisecondsEl.textContent = padTimer(miliseconds);
  secondsEl.textContent = padTimer(seconds);
  minutesEl.textContent = padTimer(minutes);
}

function padTimer(time) {
  return time.toString().padStart(2, "0");
}
/**
 * reset timer helper function
 */
function resetTimerHelper() {
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  displayTimer();
}

function addLapList() {
  const lapTime = `${padTimer(minutes)}:${padTimer(seconds)}:${padTimer(
    miliseconds
  )}`;
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>Lap ${
    lapList.childElementCount + 1
  }</span> ${lapTime}`;
  lapList.appendChild(listItem);
}
