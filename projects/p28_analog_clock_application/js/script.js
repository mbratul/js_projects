"use strict";
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

function displayTime() {
  let date = new Date();
  let getHour = date.getHours();
  let getmin = date.getMinutes();
  let getSec = date.getSeconds();

  let hRotation = 30 * getHour + getmin / 2;
  let mRotation = 6 * getmin;
  let sRotation = 6 * getSec;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
