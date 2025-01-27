const trafficLights = document.querySelectorAll(".light");

function colorLights() {
  trafficLights.forEach((trafficLight) => {
    trafficLight.style.backgroundColor = "";
  });
}

document.addEventListener("keydown", (e) => {
  colorLights();

  if (e.key === "r") {
    trafficLights[0].style.backgroundColor = "red";
  } else if (e.key === "o") {
    trafficLights[1].style.backgroundColor = "orange";
  } else if (e.key === "g") {
    trafficLights[2].style.backgroundColor = "green";
  }
});
