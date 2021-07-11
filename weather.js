const API_KEY = "0fd179450fac4d4d37447674116eaabb";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather-container .city");
      const temp = document.querySelector("#weather-container .temp");
      const weather = document.querySelector("#weather-container .main_weather");
      city.innerText = `${data.name}`;
      temp.innerText = `${data.main.temp}°C`;
      weather.innerText = `${data.weather[0].main}`;
    });
}
function onGeoErr() { 
  alert("Can';t find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);