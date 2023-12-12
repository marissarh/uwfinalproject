const weatherNotice = document.getElementById("weather-notice");
const removeNotice = function () {
  weatherNotice.classList.add("invisible");
};
setTimeout(removeNotice, 3000);

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

const apiUrlStyle = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
const apiKey = `7649b28c3542d28d3b3866ddf149b2aa`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=`;

function weatherEl(city) {
  const data = fetch(`${apiUrl}` + city + `&appid=${apiKey}` + `&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementsByClassName("city").innerHTML = data.name;
      document.getElementsByClassName("temperature").innerHTML =
        Math.round(data.main.temp) + "°F";
      document.getElementsByClassName("weatherConditions").innerHTML =
        data.weather.description;
    });
}
searchBtn.addEventListener("click", (event) => {
  event.preventDefault;
  weatherEl(searchBar.value);
});
console.log(
  fetch(`${apiUrl}` + `seattle` + `&appid=${apiKey}` + `&units=metric`).then(
    (response) => response.json()
  )
);

console.log(const temperature=data.main.temp);
