//Dom selectors
const celsiusInput = document.querySelector("#celsius");
const celsiusInputGroup = document.querySelector("#c-group");
const fahrenheitInput = document.querySelector("#fahrenheit");
const fahrenheitInputGroup = document.querySelector("#f-group");
const switchBtn = document.querySelector("#switch-btn");
const convertBtn = document.querySelector("#convert-btn");
const convertedUI = document.querySelector("#converted");
const resultsCard = document.querySelector("#results");

let currentC = true;
fahrenheitInputGroup.style.display = "none";
resultsCard.style.display = "none";

convertBtn.addEventListener("click", calculateResults);

switchBtn.addEventListener("click", switchTempInput);

function switchTempInput(e) {
  currentC = !currentC;
  console.log(currentC);
  if (currentC) {
    fahrenheitInputGroup.style.display = "none";
    celsiusInputGroup.style.display = "flex";
  } else {
    fahrenheitInputGroup.style.display = "flex";
    celsiusInputGroup.style.display = "none";
  }

  e.preventDefault();
}

//calculate results
function calculateResults(e) {
  let converted = 0;

  if (currentC) {
    converted = ceToFa(parseFloat(celsiusInput.value));
  } else {
    converted = FaToCe(parseFloat(fahrenheitInput.value));
  }
  convertedUI.value = converted;
  resultsCard.style.display = "block";

  e.preventDefault();
}

function ceToFa(celsius) {
  let cToFah = (celsius * 9) / 5 + 32;
  return cToFah;
}

function FaToCe(fahrenheit) {
  let fahToC = ((fahrenheit - 32) * 5) / 9;
  return fahToC;
}
