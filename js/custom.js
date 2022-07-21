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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `<div class="col">
                    <div class="weather-forecast__card">
                      <p class="weather-forecast__day">${formatDay(
                        forecastDay.dt
                      )}</p>
                      <img src="http://openweathermap.org/img/wn/${
                        forecastDay.weather[0].icon
                      }@2x.png"/ alt="" width="42">                    
                      <p>
                        <span class="forecast-temperature-max mr-1">${Math.round(
                          forecastDay.temp.max
                        )}°</span
                        ><span class="forecast-temperature-min">${Math.round(
                          forecastDay.temp.min
                        )}°</span>
                      </p>
                    </div>
                  </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function showTemperature(response) {
  console.log(response);
  celciusTemperture = response.data.main.temp;
  let temp = Math.round(celciusTemperture);
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
  weatherIcon.setAttribute("alt", `${response.data.weather[0].description}`);

  getForecast(response.data.coord);
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

//Quick Search Kyiv

function doQuickSearchKyiv(event) {
  event.preventDefault();
  let quickSearchBtn = document.querySelector("#quick-search_kyiv");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${quickSearchBtn.innerHTML}`;
  let searchInput = document.querySelector(".form-control");
  searchInput.value = `${quickSearchBtn.innerHTML}`;
  searchInput.value = searchInput.value.trim();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = searchInput.value.trim();
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let quickSearchKyiv = document.querySelector("#quick-search_kyiv");
quickSearchKyiv.addEventListener("click", doQuickSearchKyiv);

//Quick Search Berlin

function doQuickSearchWarsaw(event) {
  event.preventDefault();
  let quickSearchBtn = document.querySelector("#quick-search_warsaw");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${quickSearchBtn.innerHTML}`;
  let searchInput = document.querySelector(".form-control");
  searchInput.value = `${quickSearchBtn.innerHTML}`;
  searchInput.value = searchInput.value.trim();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = searchInput.value.trim();
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let quickSearchWarsaw = document.querySelector("#quick-search_warsaw");
quickSearchWarsaw.addEventListener("click", doQuickSearchWarsaw);

//Quick Search Berlin

function doQuickSearchBerlin(event) {
  event.preventDefault();
  let quickSearchBtn = document.querySelector("#quick-search_berlin");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${quickSearchBtn.innerHTML}`;
  let searchInput = document.querySelector(".form-control");
  searchInput.value = `${quickSearchBtn.innerHTML}`;
  searchInput.value = searchInput.value.trim();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = searchInput.value.trim();
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let quickSearchBerlin = document.querySelector("#quick-search_berlin");
quickSearchBerlin.addEventListener("click", doQuickSearchBerlin);

//Quick Search Rome

function doQuickSearchRome(event) {
  event.preventDefault();
  let quickSearchBtn = document.querySelector("#quick-search_rome");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${quickSearchBtn.innerHTML}`;
  let searchInput = document.querySelector(".form-control");
  searchInput.value = `${quickSearchBtn.innerHTML}`;
  searchInput.value = searchInput.value.trim();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = searchInput.value.trim();
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let quickSearchRome = document.querySelector("#quick-search_rome");
quickSearchRome.addEventListener("click", doQuickSearchRome);

//Quick Search Mardid

function doQuickSearchMardid(event) {
  event.preventDefault();
  let quickSearchBtn = document.querySelector("#quick-search_madrid");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${quickSearchBtn.innerHTML}`;
  let searchInput = document.querySelector(".form-control");
  searchInput.value = `${quickSearchBtn.innerHTML}`;
  searchInput.value = searchInput.value.trim();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = searchInput.value.trim();
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let quickSearchMardid = document.querySelector("#quick-search_madrid");
quickSearchMardid.addEventListener("click", doQuickSearchMardid);

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
showCurrentLocationWeather();

// function convertFarenheit(event) {
//   event.preventDefault();
//   let temperature = document.querySelector("#temp");
//   celcius.classList.remove("active");
//   farenheit.classList.add("active");
//   let tempConvertedFarenheit = Math.round(celciusTemperture * 1.8 + 32);
//   temperature.innerHTML = `${tempConvertedFarenheit}`;
// }

// function convertCelcius(event) {
//   event.preventDefault();
//   let temperature = document.querySelector("#temp");
//   celcius.classList.add("active");
//   farenheit.classList.remove("active");
//   temperature.innerHTML = Math.round(celciusTemperture);
// }

// let farenheit = document.querySelector("#farenheit");
// farenheit.addEventListener("click", convertFarenheit);

// let celcius = document.querySelector("#celcius");
// celcius.addEventListener("click", convertCelcius);
// let celciusTemperture = null;
