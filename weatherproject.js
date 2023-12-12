const weatherNotice = document.getElementById("weather-notice");
const removeNotice = function () {
  weatherNotice.classList.add("invisible");
};
setTimeout(removeNotice, 2000);

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

const apiUrlStyle = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
const apiKey = `7649b28c3542d28d3b3866ddf149b2aa`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=`;

function weatherEl(city) {
  fetch(`${apiUrl}` + city + `&appid=${apiKey}` + `&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temperature").innerHTML =
        Math.round(data.main.temp) + "°F";
      document.querySelector(".weatherConditions").innerHTML =
        data.weather[0].description;
      console.log(data);
    });
  document.querySelector(".containerEl").style.display = "block";
}
searchBtn.addEventListener("click", (event) => {
  event.preventDefault;
  weatherEl(searchBar.value);
});
