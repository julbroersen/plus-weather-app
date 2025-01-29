function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-box");
  let city = cityInput.value;
  let apiKey = "63fd08b40a55a7od498ecfac7t28e16f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hour}:${minutes}`;
}

let currentDate = new Date();
let currentDateElement = document.querySelector("#current-date");

currentDateElement.innerHTML = formatDate(currentDate);

let citySearch = document.querySelector(".city-search");
citySearch.addEventListener("submit", changeCity);
