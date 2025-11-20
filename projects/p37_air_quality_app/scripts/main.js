"use strict";
import { pollutionScale } from "./pollutionScale.js";

const loader = document.querySelector(".loader");
const emojiLogo = document.querySelector(".emoji_logo");
const userInfo = document.querySelector(".user_information");

async function getPolutionData() {
  const apiKey = "7dc9f610-f155-44c4-ba4c-fb54b810115a";
  const nearestCity = `http://api.airvisual.com/v2/nearest_city?key=${apiKey}`;
  let data;
  try {
    const response = await fetch(nearestCity);
    console.log(response);
    if (!response.ok) {
      throw new Error(`${response.status} Error, ${response.statusText}`);
    }
    data = await response.json();
  } catch (err) {
    loader.classList.remove("active");
    emojiLogo.src = "./resources/browser.svg";
    userInfo.textContent = err.message;
  }
  //   console.log(data);
  if (data) {
    const aqius = data.data.current.pollution.aqius;
    const city = data.data.city;
    const sortedData = {
      city,
      aqius,
      ...pollutionScale.find((obj) => {
        return aqius >= obj.scale[0] && aqius <= obj.scale[1];
      }),
    };
    //   console.log(sortedData);
    populateUI(sortedData);
    pointerPlacement(aqius);
  }
}
getPolutionData();

const cityName = document.querySelector(".city_name");
const polutionInfo = document.querySelector(".polution_info");
const polutionvalue = document.querySelector(".polution_value");
const header = document.querySelector("header");

function populateUI(data) {
  emojiLogo.src = `resources/${data.src}.svg`;
  userInfo.textContent = `Here is ${data.city} situation`;
  cityName.textContent = data.city;
  polutionInfo.textContent = data.quality;
  polutionvalue.textContent = data.aqius;
  header.style.backgroundImage = data.background;
  header.classList.add("active");
  loader.classList.remove("active");
}

const locationPointer = document.querySelector(".location_pointer");
function pointerPlacement(data) {
  const paretWidth = locationPointer.parentElement.scrollWidth;
  locationPointer.style.transform = `translateX(calc(${
    (data / 501) * paretWidth
  }px - 50%)) rotate(180deg)`;
}
