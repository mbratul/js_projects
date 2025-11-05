"use strict";
function checkInternetConnection() {
  const statusCheck = document.querySelector("#statusCheck");
  const ipAddress = document.querySelector("#ip_address");
  const networkStrength = document.querySelector("#network_strength");

  statusCheck.textContent = "Checking...";
  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
      .then((response) => {
        response.json();
      })
      .then((data) => {
        statusCheck.textContent = "Connected";
        ipAddress.textContent = data.ip;
        console.log(data.ip);

        const connection = navigator.connection;
        const networkStatus = connection
          ? connection.downlink + "Mbps"
          : "Unknown";
        networkStrength.textContent = networkStatus;
      })
      .catch((err) => {
        statusCheck.textContent = "Disconnected";
        ipAddress.textContent = "-";
        networkStrength.textContent = "-";
      });
  } else {
    statusCheck.textContent = "Disconnected";
    ipAddress.textContent = "-";
    networkStrength.textContent = "-";
  }
}
window.addEventListener("load", checkInternetConnection);
