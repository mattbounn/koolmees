document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("green");
});

document.getElementById("co2Form").addEventListener("submit", function (event) {
  event.preventDefault();

  const storage = parseFloat(document.getElementById("storage").value);
  const worldPopulation = 8000000000;
  const co2PerKwh = 0.92;
  const veluweCO2Absorption = 300000;

  const kwhPerGB = 0.5;
  const co2PerGB = kwhPerGB * co2PerKwh;

  const userCO2 = storage * co2PerGB;

  const worldCO2 = (userCO2 * worldPopulation) / 1000;

  const forestNeeded = worldCO2 / veluweCO2Absorption;

  document.getElementById(
    "userCO2"
  ).innerHTML = `Your annual storage usage results in approximately <span>${userCO2.toFixed(
    2
  )} kg</span> of CO2 emissions.`;
  document.getElementById(
    "worldCO2"
  ).innerHTML = `If everyone used the same amount, it would result in <span>${worldCO2.toFixed(
    2
  )} metric tons</span> of CO2 globally.`;
  document.getElementById(
    "forestSize"
  ).innerHTML = `To offset that much CO2, you would need approximately <span>${forestNeeded.toFixed(
    2
  )} Veluwe forests</span>.`;

  document.getElementById("results").style.display = "block";

  document.body.classList.remove("green");
  document.body.classList.add("red");
});
