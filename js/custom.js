function formatDate(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//let temperature = document.querySelector("#temp");
// function convertFarenheit() {
//   let tempConvertedFarenheit = Math.round(temperature.textContent * 1.8 + 32);
//   temperature.innerHTML = `${tempConvertedFarenheit}`;
// }

// let farenheit = document.querySelector("#farenheit");
// farenheit.addEventListener("click", convertFarenheit);

// function convertCelcius() {
//   let tempConvertedCelcius = Math.round(
//     (temperature.textContent - 32) * 0.5556
//   );
//   temperature.innerHTML = `${tempConvertedCelcius}`;
// }

// let celcius = document.querySelector("#celcius");
// celcius.addEventListener("click", convertCelcius);

function showTemperature(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = `${temp}`;
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.name;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed}km/h`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let description = document.querySelector("#description");
  description.innerHTML = `${response.data.weather[0].description}`;
  let weatherIcon = document.querySelector("#icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".form-control");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = searchInput.value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showLocation(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lon = Math.round(position.coords.longitude);
  let lat = Math.round(position.coords.latitude);
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showCurrentLocationWeather() {
  navigator.geolocation.getCurrentPosition(showLocation);
}

let currentBtn = document.querySelector("#current");
currentBtn.addEventListener("click", showCurrentLocationWeather);
